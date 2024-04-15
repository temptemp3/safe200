"reach 0.1";

const BaseState = Struct([["manager", Address]]);

export const supportsInterface = (interfaces) => (interfaceSelector) => {
  return interfaces.includes(interfaceSelector);
};

// BC200 - Beacon

const BC200 = (State) =>
  Reach.App(() => {
    setOptions({ connectors: [ALGO] });
    const supportedInterfaces = [];
    const Params = Object({
      zeroAddress: Address,
    });
    const D = Participant("Deployer", {
      params: Params,
      ready: Fun([Contract], Null),
    });
    const ARC200A = API({
      arc200_transfer: Fun([Contract, Address, UInt256], Null), // (Contract, to, value)Null
    });
    const AdminA = API("a_admin", {
      grant: Fun([Address], Null), // (Address)Null
    });
    const A = API({
      touch: Fun([], Null), // ()Null
      nop: Fun([], Null), // ()Null
    });
    const V = View({
      state: Fun([], State),
      manager: Fun([], Address),
      constructor: Fun([], Address),
      zeroAddress: Fun([], Address),
      supportsInterface: Fun([Bytes(4)], Bool),
    });
    init();
    const checkInput = (p) => {};
    D.only(() => {
      const p = declassify(interact.params);
    });
    D.publish(p).check(() => {
      checkInput(p);
    });
    const { zeroAddress } = p;
    const initialState = {
      manager: D,
    };
    const [s] = parallelReduce([initialState])
      .define(() => {
        V.constructor.set(() => D);
        V.manager.set(() => s.manager);
        V.zeroAddress.set(() => zeroAddress);
        V.state.set(() => State.fromObject(s));
        V.supportsInterface.set(supportsInterface(supportedInterfaces));
      })
      .invariant(balance() == 0, "balance accurate")
      .while(true)
      .define(() => {
        const arc200 = {
          transfer: (ctc, pmt, to_, value_) => {
            const from_ = getAddress();
            const r = remote(ctc, {
              arc200_transfer: Fun([Bytes(4), Address, UInt256], Bool),
            });
            return r.arc200_transfer.pay(pmt).ALGO({
              rawCall: true,
              fees: 1,
              apps: [ctc],
              boxes: [
                [ctc, 0, from_],
                [ctc, 0, to_],
              ],
            })(Bytes.fromHex("0xda7025b9"), to_, value_); // sha256(arc200_transfer(address,uint256)bool)
          },
        };
      })
      // api: grant
      // - grants manager (manager only)
      .api_(AdminA.grant, (addr) => {
        check(s.manager === this, "must be manager");
        return [
          (k) => {
            k(null);
            return [
              {
                ...s,
                manager: addr,
              },
            ];
          },
        ];
      })
      // api: touch
      // - transfers untracked funds to manager
      .api_(A.touch, () => {
        return [
          (k) => {
            const ut = getUntrackedFunds();
            transfer(ut).to(s.manager);
            k(null);
            return [s];
          },
        ];
      })
      // api: nop
      // - no operation
      .api_(A.nop, () => {
        return [
          (k) => {
            k(null);
            return [s];
          },
        ];
      })
      // api: arc200_transfer (manager only)
      // - transfer arc200
      .api_(ARC200A.arc200_transfer, (ctc, to_, value_) => {
        check(this === s.manager, "must be manager");
        return [
          (k) => {
            k(null);
            void arc200.transfer(ctc, 0, to_, value_);
            return [s];
          },
        ];
      });
    commit();
    exit();
  });

export const SAFE200 = BC200(BaseState);

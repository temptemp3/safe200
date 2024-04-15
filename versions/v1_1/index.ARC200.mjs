// Automatically generated with Reach 0.1.13 (88e48902)
/* eslint-disable */
export const _version = '0.1.13';
export const _versionHash = '0.1.13 (88e48902)';
export const _backendVersion = 27;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Struct([['votekey', ctc2], ['selkey', ctc2], ['spkey', ctc3], ['votefst', ctc4], ['votelst', ctc4], ['votekd', ctc4]]);
  return {
    arc200_Approval: [ctc0, ctc0, ctc1],
    arc200_Transfer: [ctc0, ctc0, ctc1],
    e_deregister: [ctc5],
    e_register: [ctc5],
    e_selkey: [ctc2],
    e_spkey: [ctc3],
    e_votefst: [ctc4],
    e_votekd: [ctc4],
    e_votekey: [ctc2],
    e_votelst: [ctc4]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc4 = stdlib.T_UInt256;
  const ctc5 = stdlib.T_Object({
    decimals: ctc1,
    name: ctc2,
    symbol: ctc3,
    totalSupply: ctc4
    });
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc8 = stdlib.T_Struct([['votekey', ctc2], ['selkey', ctc2], ['spkey', ctc7], ['votefst', ctc1], ['votelst', ctc1], ['votekd', ctc1]]);
  const ctc9 = stdlib.T_Data({
    None: ctc6,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Bool;
  const ctc11 = stdlib.T_Object({
    keyInfo: ctc9,
    manager: ctc0,
    registered: ctc10
    });
  const ctc12 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc13 = stdlib.T_Data({
    Allowance: ctc12,
    Balance: ctc0
    });
  const ctc14 = stdlib.T_Struct([['manager', ctc0], ['registered', ctc10], ['keyInfo', ctc9]]);
  const ctc15 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc16 = stdlib.T_Data({
    None: ctc6,
    Some: ctc4
    });
  const map0_ctc = ctc16;
  
  const map1_ctc = ctc16;
  
  
  const _arc200_allowance = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2005, v2006, v2007, v2010, v2013, v2024, v2026, v2030] = svs;
      return (await ((async (_v2050, _v2051 ) => {
          const v2050 = stdlib.protect(ctc0, _v2050, null);
          const v2051 = stdlib.protect(ctc0, _v2051, null);
        
        const v2052 = [v2050, v2051];
        const v2053 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc12, v2052, ctc4), null);
        const v2054 = stdlib.fromSome(v2053, stdlib.checkedBigNumberify('./index.rsh:181:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        
        return v2054;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc200_balanceOf = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2005, v2006, v2007, v2010, v2013, v2024, v2026, v2030] = svs;
      return (await ((async (_v2047 ) => {
          const v2047 = stdlib.protect(ctc0, _v2047, null);
        
        const v2048 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc0, v2047, ctc4), null);
        const v2049 = stdlib.fromSome(v2048, stdlib.checkedBigNumberify('./index.rsh:175:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        
        return v2049;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc200_decimals = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2005, v2006, v2007, v2010, v2013, v2024, v2026, v2030] = svs;
      return (await ((async () => {
        
        
        return v2013;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc200_name = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2005, v2006, v2007, v2010, v2013, v2024, v2026, v2030] = svs;
      return (await ((async () => {
        
        const v2020 = v2007.name;
        
        return v2020;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc200_symbol = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2005, v2006, v2007, v2010, v2013, v2024, v2026, v2030] = svs;
      return (await ((async () => {
        
        const v2021 = v2007.symbol;
        
        return v2021;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc200_totalSupply = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2005, v2006, v2007, v2010, v2013, v2024, v2026, v2030] = svs;
      return (await ((async () => {
        
        
        return v2010;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _constructor = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2005, v2006, v2007, v2010, v2013, v2024, v2026, v2030] = svs;
      return (await ((async () => {
        
        
        return v2006;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _hasBox = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2005, v2006, v2007, v2010, v2013, v2024, v2026, v2030] = svs;
      return (await ((async (_v2033 ) => {
          const v2033 = stdlib.protect(ctc13, _v2033, null);
        
        let v2038;
        switch (v2033[0]) {
          case 'Allowance': {
            const v2039 = v2033[1];
            const v2040 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc12, v2039, ctc4), null);
            const v2041 = {
              None: 0,
              Some: 1
              }[v2040[0]];
            const v2042 = stdlib.eq(v2041, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
            v2038 = v2042;
            
            break;
            }
          case 'Balance': {
            const v2043 = v2033[1];
            const v2044 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc0, v2043, ctc4), null);
            const v2045 = {
              None: 0,
              Some: 1
              }[v2044[0]];
            const v2046 = stdlib.eq(v2045, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
            v2038 = v2046;
            
            break;
            }
          }
        
        return v2038;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _manager = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2005, v2006, v2007, v2010, v2013, v2024, v2026, v2030] = svs;
      return (await ((async () => {
        
        const v2060 = v2026.manager;
        
        return v2060;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _state = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2005, v2006, v2007, v2010, v2013, v2024, v2026, v2030] = svs;
      return (await ((async () => {
        
        const v2055 = v2026.manager;
        const v2056 = v2026.registered;
        const v2057 = v2026.keyInfo;
        const v2058 = {
          keyInfo: v2057,
          manager: v2055,
          registered: v2056
          };
        
        return v2058;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _supportsInterface = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2005, v2006, v2007, v2010, v2013, v2024, v2026, v2030] = svs;
      return (await ((async (_v2061 ) => {
          const v2061 = stdlib.protect(ctc15, _v2061, null);
        
        const v2062 = stdlib.bytesFromHex("0xc7bea040");
        const v2064 = stdlib.digest([ctc15], [v2062]);
        const v2065 = stdlib.digest([ctc15], [v2061]);
        const v2066 = stdlib.digestEq(v2064, v2065);
        
        return v2066;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _zeroAddress = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2005, v2006, v2007, v2010, v2013, v2024, v2026, v2030] = svs;
      return (await ((async () => {
        
        
        return v2005;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      arc200_allowance: {
        decode: _arc200_allowance,
        dom: [ctc0, ctc0],
        rng: ctc4
        },
      arc200_balanceOf: {
        decode: _arc200_balanceOf,
        dom: [ctc0],
        rng: ctc4
        },
      arc200_decimals: {
        decode: _arc200_decimals,
        dom: [],
        rng: ctc1
        },
      arc200_name: {
        decode: _arc200_name,
        dom: [],
        rng: ctc2
        },
      arc200_symbol: {
        decode: _arc200_symbol,
        dom: [],
        rng: ctc3
        },
      arc200_totalSupply: {
        decode: _arc200_totalSupply,
        dom: [],
        rng: ctc4
        },
      constructor: {
        decode: _constructor,
        dom: [],
        rng: ctc0
        },
      hasBox: {
        decode: _hasBox,
        dom: [ctc13],
        rng: ctc10
        },
      manager: {
        decode: _manager,
        dom: [],
        rng: ctc0
        },
      state: {
        decode: _state,
        dom: [],
        rng: ctc14
        },
      supportsInterface: {
        decode: _supportsInterface,
        dom: [ctc15],
        rng: ctc10
        },
      zeroAddress: {
        decode: _zeroAddress,
        dom: [],
        rng: ctc0
        }
      },
    views: {
      3: [ctc0, ctc0, ctc5, ctc4, ctc1, ctc9, ctc11, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2, ctc2]);
  return {
    mapDataTy: ctc3
    };
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6,
    totalSupply: ctc1
    });
  const ctc8 = stdlib.T_Object({
    manager: ctc3,
    meta: ctc7,
    zeroAddress: ctc3
    });
  const ctc9 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc12 = stdlib.T_Tuple([ctc3]);
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc15 = stdlib.T_Tuple([ctc5, ctc5, ctc14, ctc4, ctc4, ctc4]);
  const ctc16 = stdlib.T_Data({
    arc200_approve0_273: ctc9,
    arc200_transfer0_273: ctc9,
    arc200_transferFrom0_273: ctc10,
    createAllowanceBox0_273: ctc11,
    createBalanceBox0_273: ctc12,
    deregister0_273: ctc13,
    grant0_273: ctc12,
    nop0_273: ctc13,
    register0_273: ctc15,
    touch0_273: ctc13
    });
  const ctc17 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false
    });
  
  
  const v1985 = stdlib.protect(ctc8, interact.params, 'for Deployer\'s interact field params');
  const v1986 = v1985.manager;
  const v1987 = v1985.meta;
  const v1988 = v1985.zeroAddress;
  const v1989 = v1987.decimals;
  const v1992 = v1987.totalSupply;
  
  const v1999 = stdlib.gt256(v1992, stdlib.checkedBigNumberify('./index.rsh:131:34:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v1999, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:130:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Total supply must be greater than zero',
    who: 'Deployer'
    });
  const v2002 = stdlib.le(v1989, stdlib.checkedBigNumberify('./index.rsh:28:22:decimal', stdlib.UInt_max, '256'));
  stdlib.assert(v2002, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:134:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Decimals must be less than 256',
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1988, v1986, v1987],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:129:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc3, ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:129:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2005, v2006, v2007], secs: v2009, time: v2008, didSend: v108, from: v2004 } = txn1;
      
      const v2010 = v2007.totalSupply;
      const v2013 = v2007.decimals;
      ;
      await stdlib.simMapSet(sim_r, 0, ctc3, v2006, ctc1, v2010);
      await stdlib.simMapSet(sim_r, 0, ctc3, v2005, ctc1, stdlib.checkedBigNumberify('./index.rsh:144:35:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      null;
      const v2018 = await ctc.getContractInfo();
      
      const v2024 = ['None', null];
      const v2025 = {
        keyInfo: v2024,
        manager: v2006,
        registered: false
        };
      const v2026 = v2025;
      const v2027 = v2008;
      const v2030 = stdlib.checkedBigNumberify('./index.rsh:124:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v2005, v2006, v2007], secs: v2009, time: v2008, didSend: v108, from: v2004 } = txn1;
  const v2010 = v2007.totalSupply;
  const v2011 = stdlib.gt256(v2010, stdlib.checkedBigNumberify('./index.rsh:131:34:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v2011, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:130:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Total supply must be greater than zero',
    who: 'Deployer'
    });
  const v2013 = v2007.decimals;
  const v2014 = stdlib.le(v2013, stdlib.checkedBigNumberify('./index.rsh:28:22:decimal', stdlib.UInt_max, '256'));
  stdlib.assert(v2014, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:134:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Decimals must be less than 256',
    who: 'Deployer'
    });
  ;
  await stdlib.mapSet(map0, ctc3, v2006, ctc1, v2010);
  await stdlib.mapSet(map0, ctc3, v2005, ctc1, stdlib.checkedBigNumberify('./index.rsh:144:35:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  null;
  const v2018 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.ready(v2018), {
    at: './index.rsh:148:19:application',
    fs: ['at ./index.rsh:148:19:application call to [unknown function] (defined at: ./index.rsh:148:19:function exp)', 'at ./index.rsh:148:19:application call to "liftedInteract" (defined at: ./index.rsh:148:19:application)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  const v2024 = ['None', null];
  const v2025 = {
    keyInfo: v2024,
    manager: v2006,
    registered: false
    };
  let v2026 = v2025;
  let v2027 = v2008;
  let v2030 = stdlib.checkedBigNumberify('./index.rsh:124:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn2 = txn1;
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc16],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v2304], secs: v2306, time: v2305, didSend: v1393, from: v2303 } = txn3;
    switch (v2304[0]) {
      case 'arc200_approve0_273': {
        const v2307 = v2304[1];
        undefined /* setApiDetails */;
        ;
        const v2343 = v2307[stdlib.checkedBigNumberify('./index.rsh:261:10:spread', stdlib.UInt_max, '0')];
        const v2344 = v2307[stdlib.checkedBigNumberify('./index.rsh:261:10:spread', stdlib.UInt_max, '1')];
        const v2345 = stdlib.addressEq(v2303, v2005);
        const v2346 = v2345 ? false : true;
        stdlib.assert(v2346, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:262:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:265:13:application call to [unknown function] (defined at: ./index.rsh:265:13:function exp)'],
          msg: 'ARC200: Approve this to zero address',
          who: 'Deployer'
          });
        const v2348 = stdlib.addressEq(v2343, v2005);
        const v2349 = v2348 ? false : true;
        stdlib.assert(v2349, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:263:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:265:13:application call to [unknown function] (defined at: ./index.rsh:265:13:function exp)'],
          msg: 'ARC200: Approve to zero address',
          who: 'Deployer'
          });
        const v2353 = [v2303, v2343];
        await stdlib.mapSet(map1, ctc11, v2353, ctc1, v2344);
        null;
        const v2354 = true;
        await txn3.getOutput('arc200_approve', 'v2354', ctc17, v2354);
        const cv2026 = v2026;
        const cv2027 = v2305;
        const cv2030 = v2030;
        
        v2026 = cv2026;
        v2027 = cv2027;
        v2030 = cv2030;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'arc200_transfer0_273': {
        const v2613 = v2304[1];
        undefined /* setApiDetails */;
        ;
        const v2670 = v2613[stdlib.checkedBigNumberify('./index.rsh:220:10:spread', stdlib.UInt_max, '0')];
        const v2671 = v2613[stdlib.checkedBigNumberify('./index.rsh:220:10:spread', stdlib.UInt_max, '1')];
        const v2673 = stdlib.addressEq(v2303, v2670);
        const v2674 = v2673 ? false : true;
        stdlib.assert(v2674, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:211:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:221:18:application call to "chkTransfer" (defined at: ./index.rsh:210:48:function exp)', 'at ./index.rsh:223:13:application call to [unknown function] (defined at: ./index.rsh:223:13:function exp)'],
          msg: 'ARC200: Transfer to self',
          who: 'Deployer'
          });
        const v2676 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2303, ctc1), null);
        const v2677 = stdlib.fromSome(v2676, stdlib.checkedBigNumberify('./index.rsh:175:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2678 = stdlib.ge256(v2677, v2671);
        stdlib.assert(v2678, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:212:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:221:18:application call to "chkTransfer" (defined at: ./index.rsh:210:48:function exp)', 'at ./index.rsh:223:13:application call to [unknown function] (defined at: ./index.rsh:223:13:function exp)'],
          msg: 'ARC200: Transfer amount must not be greater than balance',
          who: 'Deployer'
          });
        const v2682 = true;
        await txn3.getOutput('arc200_transfer', 'v2682', ctc17, v2682);
        const v2694 = stdlib.safeSub256(v2677, v2671);
        await stdlib.mapSet(map0, ctc3, v2303, ctc1, v2694);
        const v2695 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2670, ctc1), null);
        const v2696 = stdlib.fromSome(v2695, stdlib.checkedBigNumberify('./index.rsh:175:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2697 = stdlib.safeAdd256(v2696, v2671);
        await stdlib.mapSet(map0, ctc3, v2670, ctc1, v2697);
        null;
        const cv2026 = v2026;
        const cv2027 = v2305;
        const cv2030 = v2030;
        
        v2026 = cv2026;
        v2027 = cv2027;
        v2030 = cv2030;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'arc200_transferFrom0_273': {
        const v2919 = v2304[1];
        undefined /* setApiDetails */;
        ;
        const v3007 = v2919[stdlib.checkedBigNumberify('./index.rsh:247:10:spread', stdlib.UInt_max, '0')];
        const v3008 = v2919[stdlib.checkedBigNumberify('./index.rsh:247:10:spread', stdlib.UInt_max, '1')];
        const v3009 = v2919[stdlib.checkedBigNumberify('./index.rsh:247:10:spread', stdlib.UInt_max, '2')];
        const v3011 = stdlib.addressEq(v3007, v3008);
        const v3012 = v3011 ? false : true;
        stdlib.assert(v3012, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:232:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:248:22:application call to "chkTransferFrom" (defined at: ./index.rsh:231:62:function exp)', 'at ./index.rsh:250:13:application call to [unknown function] (defined at: ./index.rsh:250:13:function exp)'],
          msg: 'ARC200: Transfer to self',
          who: 'Deployer'
          });
        const v3014 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v3007, ctc1), null);
        const v3015 = stdlib.fromSome(v3014, stdlib.checkedBigNumberify('./index.rsh:175:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v3016 = stdlib.ge256(v3015, v3009);
        stdlib.assert(v3016, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:233:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:248:22:application call to "chkTransferFrom" (defined at: ./index.rsh:231:62:function exp)', 'at ./index.rsh:250:13:application call to [unknown function] (defined at: ./index.rsh:250:13:function exp)'],
          msg: 'ARC200: Amount must not be greater than balance',
          who: 'Deployer'
          });
        const v3018 = [v3007, v2303];
        const v3019 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc11, v3018, ctc1), null);
        const v3020 = stdlib.fromSome(v3019, stdlib.checkedBigNumberify('./index.rsh:181:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v3021 = stdlib.ge256(v3020, v3009);
        stdlib.assert(v3021, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:237:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:248:22:application call to "chkTransferFrom" (defined at: ./index.rsh:231:62:function exp)', 'at ./index.rsh:250:13:application call to [unknown function] (defined at: ./index.rsh:250:13:function exp)'],
          msg: 'ARC200: Amount must not be greater than allowance',
          who: 'Deployer'
          });
        const v3030 = stdlib.safeSub256(v3015, v3009);
        await stdlib.mapSet(map0, ctc3, v3007, ctc1, v3030);
        const v3031 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v3008, ctc1), null);
        const v3032 = stdlib.fromSome(v3031, stdlib.checkedBigNumberify('./index.rsh:175:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v3033 = stdlib.safeAdd256(v3032, v3009);
        await stdlib.mapSet(map0, ctc3, v3008, ctc1, v3033);
        null;
        const v3038 = stdlib.safeSub256(v3020, v3009);
        await stdlib.mapSet(map1, ctc11, v3018, ctc1, v3038);
        null;
        const v3041 = true;
        await txn3.getOutput('arc200_transferFrom', 'v3041', ctc17, v3041);
        const cv2026 = v2026;
        const cv2027 = v2305;
        const cv2030 = v2030;
        
        v2026 = cv2026;
        v2027 = cv2027;
        v2030 = cv2030;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'createAllowanceBox0_273': {
        const v3225 = v2304[1];
        undefined /* setApiDetails */;
        ;
        const v3358 = v3225[stdlib.checkedBigNumberify('./index.rsh:287:10:spread', stdlib.UInt_max, '0')];
        const v3359 = v3225[stdlib.checkedBigNumberify('./index.rsh:287:10:spread', stdlib.UInt_max, '1')];
        const v3360 = [v3358, v3359];
        const v3361 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc11, v3360, ctc1), null);
        const v3362 = {
          None: 0,
          Some: 1
          }[v3361[0]];
        const v3363 = stdlib.eq(v3362, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v3363, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:288:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:293:13:application call to [unknown function] (defined at: ./index.rsh:293:13:function exp)'],
          msg: 'ARC200: Allowance box already exists',
          who: 'Deployer'
          });
        await stdlib.mapSet(map1, ctc11, v3360, ctc1, stdlib.checkedBigNumberify('./index.rsh:294:50:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v3368 = true;
        await txn3.getOutput('createAllowanceBox', 'v3368', ctc17, v3368);
        const cv2026 = v2026;
        const cv2027 = v2305;
        const cv2030 = v2030;
        
        v2026 = cv2026;
        v2027 = cv2027;
        v2030 = cv2030;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'createBalanceBox0_273': {
        const v3531 = v2304[1];
        undefined /* setApiDetails */;
        ;
        const v3684 = v3531[stdlib.checkedBigNumberify('./index.rsh:275:10:spread', stdlib.UInt_max, '0')];
        const v3685 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v3684, ctc1), null);
        const v3686 = {
          None: 0,
          Some: 1
          }[v3685[0]];
        const v3687 = stdlib.eq(v3686, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v3687, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:276:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:278:13:application call to [unknown function] (defined at: ./index.rsh:278:13:function exp)'],
          msg: 'ARC200: Balance box already exists',
          who: 'Deployer'
          });
        await stdlib.mapSet(map0, ctc3, v3684, ctc1, stdlib.checkedBigNumberify('./index.rsh:279:36:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v3690 = true;
        await txn3.getOutput('createBalanceBox', 'v3690', ctc17, v3690);
        const cv2026 = v2026;
        const cv2027 = v2305;
        const cv2030 = v2030;
        
        v2026 = cv2026;
        v2027 = cv2027;
        v2030 = cv2030;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'deregister0_273': {
        const v3837 = v2304[1];
        undefined /* setApiDetails */;
        const v3847 = v2026.manager;
        const v3848 = stdlib.addressEq(v2303, v3847);
        stdlib.assert(v3848, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:332:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:331:28:application call to [unknown function] (defined at: ./index.rsh:331:28:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:331:28:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
          msg: 'ARC200: Only manager can grant',
          who: 'Deployer'
          });
        const v3850 = v2026.registered;
        stdlib.assert(v3850, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:333:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:331:28:application call to [unknown function] (defined at: ./index.rsh:331:28:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:331:28:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
          msg: 'Must be registered',
          who: 'Deployer'
          });
        const v3852 = v2026.keyInfo;
        const v3853 = {
          None: 0,
          Some: 1
          }[v3852[0]];
        const v3854 = stdlib.eq(v3853, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v3855 = v3854 ? false : true;
        stdlib.assert(v3855, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:334:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:331:28:application call to [unknown function] (defined at: ./index.rsh:331:28:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:331:28:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
          msg: 'Must have key info',
          who: 'Deployer'
          });
        const v3871 = stdlib.add(v2030, stdlib.checkedBigNumberify('./index.rsh:336:9:decimal', stdlib.UInt_max, '1000'));
        ;
        switch (v3852[0]) {
          case 'None': {
            const v4016 = v3852[1];
            const v4017 = false;
            await txn3.getOutput('deregister', 'v4017', ctc17, v4017);
            const cv2026 = v2026;
            const cv2027 = v2305;
            const cv2030 = v3871;
            
            v2026 = cv2026;
            v2027 = cv2027;
            v2030 = cv2030;
            
            txn2 = txn3;
            continue;
            break;
            }
          case 'Some': {
            const v4026 = v3852[1];
            const v4027 = true;
            await txn3.getOutput('deregister', 'v4027', ctc17, v4027);
            null;
            const v4042 = stdlib.sub(v3871, stdlib.checkedBigNumberify('./index.rsh:344:24:decimal', stdlib.UInt_max, '1000'));
            ;
            const v4047 = {
              keyInfo: v2024,
              manager: v3847,
              registered: false
              };
            const cv2026 = v4047;
            const cv2027 = v2305;
            const cv2030 = v4042;
            
            v2026 = cv2026;
            v2027 = cv2027;
            v2030 = cv2030;
            
            txn2 = txn3;
            continue;
            break;
            }
          }
        break;
        }
      case 'grant0_273': {
        const v4143 = v2304[1];
        undefined /* setApiDetails */;
        ;
        const v4358 = v4143[stdlib.checkedBigNumberify('./index.rsh:379:10:spread', stdlib.UInt_max, '0')];
        const v4359 = stdlib.addressEq(v4358, v2005);
        const v4360 = v4359 ? false : true;
        stdlib.assert(v4360, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:380:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:384:13:application call to [unknown function] (defined at: ./index.rsh:384:13:function exp)'],
          msg: 'ARC200: Grant zero address',
          who: 'Deployer'
          });
        const v4362 = v2026.manager;
        const v4363 = stdlib.addressEq(v4358, v4362);
        const v4364 = v4363 ? false : true;
        stdlib.assert(v4364, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:381:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:384:13:application call to [unknown function] (defined at: ./index.rsh:384:13:function exp)'],
          msg: 'ARC200: Grant to manager',
          who: 'Deployer'
          });
        const v4367 = stdlib.addressEq(v2303, v4362);
        stdlib.assert(v4367, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:382:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:384:13:application call to [unknown function] (defined at: ./index.rsh:384:13:function exp)'],
          msg: 'ARC200: Only manager can grant',
          who: 'Deployer'
          });
        const v4370 = null;
        await txn3.getOutput('grant', 'v4370', ctc0, v4370);
        const v4377 = v2026.keyInfo;
        const v4379 = v2026.registered;
        const v4380 = {
          keyInfo: v4377,
          manager: v4358,
          registered: v4379
          };
        const cv2026 = v4380;
        const cv2027 = v2305;
        const cv2030 = v2030;
        
        v2026 = cv2026;
        v2027 = cv2027;
        v2030 = cv2030;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'nop0_273': {
        const v4449 = v2304[1];
        undefined /* setApiDetails */;
        ;
        const v4690 = null;
        await txn3.getOutput('nop', 'v4690', ctc0, v4690);
        const cv2026 = v2026;
        const cv2027 = v2305;
        const cv2030 = v2030;
        
        v2026 = cv2026;
        v2027 = cv2027;
        v2030 = cv2030;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'register0_273': {
        const v4755 = v2304[1];
        undefined /* setApiDetails */;
        const v4784 = v2026.manager;
        const v4785 = stdlib.addressEq(v2303, v4784);
        stdlib.assert(v4785, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:303:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:302:74:application call to [unknown function] (defined at: ./index.rsh:302:74:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:302:74:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
          msg: 'ARC200: Only manager can grant',
          who: 'Deployer'
          });
        const v4789 = stdlib.add(v2030, stdlib.checkedBigNumberify('./index.rsh:305:9:decimal', stdlib.UInt_max, '1000'));
        ;
        const v5004 = v4755[stdlib.checkedBigNumberify('./index.rsh:302:10:spread', stdlib.UInt_max, '0')];
        const v5005 = v4755[stdlib.checkedBigNumberify('./index.rsh:302:10:spread', stdlib.UInt_max, '1')];
        const v5006 = v4755[stdlib.checkedBigNumberify('./index.rsh:302:10:spread', stdlib.UInt_max, '2')];
        const v5007 = v4755[stdlib.checkedBigNumberify('./index.rsh:302:10:spread', stdlib.UInt_max, '3')];
        const v5008 = v4755[stdlib.checkedBigNumberify('./index.rsh:302:10:spread', stdlib.UInt_max, '4')];
        const v5009 = v4755[stdlib.checkedBigNumberify('./index.rsh:302:10:spread', stdlib.UInt_max, '5')];
        const v5019 = true;
        await txn3.getOutput('register', 'v5019', ctc17, v5019);
        const v5031 = {
          selkey: v5005,
          spkey: v5006,
          votefst: v5007,
          votekd: v5009,
          votekey: v5004,
          votelst: v5008
          };
        null;
        null;
        null;
        null;
        null;
        null;
        null;
        const v5035 = stdlib.sub(v4789, stdlib.checkedBigNumberify('./index.rsh:324:20:decimal', stdlib.UInt_max, '1000'));
        ;
        const v5040 = ['Some', v5031];
        const v5041 = {
          keyInfo: v5040,
          manager: v4784,
          registered: true
          };
        const cv2026 = v5041;
        const cv2027 = v2305;
        const cv2030 = v5035;
        
        v2026 = cv2026;
        v2027 = cv2027;
        v2030 = cv2030;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'touch0_273': {
        const v5061 = v2304[1];
        undefined /* setApiDetails */;
        ;
        const v5354 = (stdlib.le(await ctc.getBalance(), v2030) ? stdlib.checkedBigNumberify('./index.rsh:359:39:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v2030));
        const v5355 = stdlib.safeAdd(v5354, v2030);
        const v5356 = v2026.manager;
        const v5360 = stdlib.sub(v5355, v5354);
        ;
        await txn3.getOutput('touch', 'v5354', ctc4, v5354);
        const cv2026 = v2026;
        const cv2027 = v2305;
        const cv2030 = v5360;
        
        v2026 = cv2026;
        v2027 = cv2027;
        v2030 = cv2030;
        
        txn2 = txn3;
        continue;
        break;
        }
      }
    
    }
  return;
  
  
  };
export async function _arc200_approve3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _arc200_approve3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _arc200_approve3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6,
    totalSupply: ctc1
    });
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc9 = stdlib.T_Struct([['votekey', ctc5], ['selkey', ctc5], ['spkey', ctc8], ['votefst', ctc4], ['votelst', ctc4], ['votekd', ctc4]]);
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc9
    });
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Object({
    keyInfo: ctc10,
    manager: ctc3,
    registered: ctc11
    });
  const ctc13 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc16 = stdlib.T_Tuple([ctc3]);
  const ctc17 = stdlib.T_Tuple([]);
  const ctc18 = stdlib.T_Tuple([ctc5, ctc5, ctc8, ctc4, ctc4, ctc4]);
  const ctc19 = stdlib.T_Data({
    arc200_approve0_273: ctc13,
    arc200_transfer0_273: ctc13,
    arc200_transferFrom0_273: ctc14,
    createAllowanceBox0_273: ctc15,
    createBalanceBox0_273: ctc16,
    deregister0_273: ctc17,
    grant0_273: ctc16,
    nop0_273: ctc17,
    register0_273: ctc18,
    touch0_273: ctc17
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2005, v2006, v2007, v2010, v2013, v2024, v2026, v2030] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc3, ctc7, ctc1, ctc4, ctc10, ctc12, ctc4]);
  const v2124 = ctc.selfAddress();
  const v2126 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:261:47:application call to [unknown function] (defined at: ./index.rsh:261:47:function exp)', 'at ./index.rsh:163:29:application call to "runarc200_approve0_273" (defined at: ./index.rsh:261:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'in',
    who: 'arc200_approve'
    });
  const v2127 = v2126[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2131 = stdlib.addressEq(v2124, v2005);
  const v2132 = v2131 ? false : true;
  stdlib.assert(v2132, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:262:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:261:47:application call to [unknown function] (defined at: ./index.rsh:261:47:function exp)', 'at ./index.rsh:163:29:application call to "runarc200_approve0_273" (defined at: ./index.rsh:261:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'ARC200: Approve this to zero address',
    who: 'arc200_approve'
    });
  const v2134 = stdlib.addressEq(v2127, v2005);
  const v2135 = v2134 ? false : true;
  stdlib.assert(v2135, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:263:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:261:47:application call to [unknown function] (defined at: ./index.rsh:261:47:function exp)', 'at ./index.rsh:163:29:application call to "runarc200_approve0_273" (defined at: ./index.rsh:261:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'ARC200: Approve to zero address',
    who: 'arc200_approve'
    });
  const v2144 = ['arc200_approve0_273', v2126];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2005, v2006, v2007, v2010, v2013, v2024, v2026, v2030, v2144],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [stdlib.checkedBigNumberify('./index.rsh:261:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2304], secs: v2306, time: v2305, didSend: v1393, from: v2303 } = txn1;
      
      switch (v2304[0]) {
        case 'arc200_approve0_273': {
          const v2307 = v2304[1];
          sim_r.txns.push({
            kind: 'api',
            who: "arc200_approve"
            });
          ;
          const v2343 = v2307[stdlib.checkedBigNumberify('./index.rsh:261:10:spread', stdlib.UInt_max, '0')];
          const v2344 = v2307[stdlib.checkedBigNumberify('./index.rsh:261:10:spread', stdlib.UInt_max, '1')];
          const v2353 = [v2303, v2343];
          await stdlib.simMapSet(sim_r, 1, ctc15, v2353, ctc1, v2344);
          null;
          const v2354 = true;
          const v2355 = await txn1.getOutput('arc200_approve', 'v2354', ctc11, v2354);
          
          const v7623 = v2026;
          const v7625 = v2030;
          sim_r.isHalt = false;
          
          break;
          }
        case 'arc200_transfer0_273': {
          const v2613 = v2304[1];
          
          break;
          }
        case 'arc200_transferFrom0_273': {
          const v2919 = v2304[1];
          
          break;
          }
        case 'createAllowanceBox0_273': {
          const v3225 = v2304[1];
          
          break;
          }
        case 'createBalanceBox0_273': {
          const v3531 = v2304[1];
          
          break;
          }
        case 'deregister0_273': {
          const v3837 = v2304[1];
          
          break;
          }
        case 'grant0_273': {
          const v4143 = v2304[1];
          
          break;
          }
        case 'nop0_273': {
          const v4449 = v2304[1];
          
          break;
          }
        case 'register0_273': {
          const v4755 = v2304[1];
          
          break;
          }
        case 'touch0_273': {
          const v5061 = v2304[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc7, ctc1, ctc4, ctc10, ctc12, ctc4, ctc19],
    waitIfNotPresent: false
    }));
  const {data: [v2304], secs: v2306, time: v2305, didSend: v1393, from: v2303 } = txn1;
  switch (v2304[0]) {
    case 'arc200_approve0_273': {
      const v2307 = v2304[1];
      undefined /* setApiDetails */;
      ;
      const v2343 = v2307[stdlib.checkedBigNumberify('./index.rsh:261:10:spread', stdlib.UInt_max, '0')];
      const v2344 = v2307[stdlib.checkedBigNumberify('./index.rsh:261:10:spread', stdlib.UInt_max, '1')];
      const v2345 = stdlib.addressEq(v2303, v2005);
      const v2346 = v2345 ? false : true;
      stdlib.assert(v2346, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:262:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:265:13:application call to [unknown function] (defined at: ./index.rsh:265:13:function exp)'],
        msg: 'ARC200: Approve this to zero address',
        who: 'arc200_approve'
        });
      const v2348 = stdlib.addressEq(v2343, v2005);
      const v2349 = v2348 ? false : true;
      stdlib.assert(v2349, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:263:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:265:13:application call to [unknown function] (defined at: ./index.rsh:265:13:function exp)'],
        msg: 'ARC200: Approve to zero address',
        who: 'arc200_approve'
        });
      const v2353 = [v2303, v2343];
      await stdlib.mapSet(map1, ctc15, v2353, ctc1, v2344);
      null;
      const v2354 = true;
      const v2355 = await txn1.getOutput('arc200_approve', 'v2354', ctc11, v2354);
      if (v1393) {
        stdlib.protect(ctc0, await interact.out(v2307, v2355), {
          at: './index.rsh:261:11:application',
          fs: ['at ./index.rsh:261:11:application call to [unknown function] (defined at: ./index.rsh:261:11:function exp)', 'at ./index.rsh:268:12:application call to "k" (defined at: ./index.rsh:265:13:function exp)', 'at ./index.rsh:265:13:application call to [unknown function] (defined at: ./index.rsh:265:13:function exp)'],
          msg: 'out',
          who: 'arc200_approve'
          });
        }
      else {
        }
      
      const v7623 = v2026;
      const v7625 = v2030;
      return;
      
      break;
      }
    case 'arc200_transfer0_273': {
      const v2613 = v2304[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_273': {
      const v2919 = v2304[1];
      return;
      break;
      }
    case 'createAllowanceBox0_273': {
      const v3225 = v2304[1];
      return;
      break;
      }
    case 'createBalanceBox0_273': {
      const v3531 = v2304[1];
      return;
      break;
      }
    case 'deregister0_273': {
      const v3837 = v2304[1];
      return;
      break;
      }
    case 'grant0_273': {
      const v4143 = v2304[1];
      return;
      break;
      }
    case 'nop0_273': {
      const v4449 = v2304[1];
      return;
      break;
      }
    case 'register0_273': {
      const v4755 = v2304[1];
      return;
      break;
      }
    case 'touch0_273': {
      const v5061 = v2304[1];
      return;
      break;
      }
    }
  
  
  };
export async function _arc200_transfer3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _arc200_transfer3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _arc200_transfer3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6,
    totalSupply: ctc1
    });
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc9 = stdlib.T_Struct([['votekey', ctc5], ['selkey', ctc5], ['spkey', ctc8], ['votefst', ctc4], ['votelst', ctc4], ['votekd', ctc4]]);
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc9
    });
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Object({
    keyInfo: ctc10,
    manager: ctc3,
    registered: ctc11
    });
  const ctc13 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc16 = stdlib.T_Tuple([ctc3]);
  const ctc17 = stdlib.T_Tuple([]);
  const ctc18 = stdlib.T_Tuple([ctc5, ctc5, ctc8, ctc4, ctc4, ctc4]);
  const ctc19 = stdlib.T_Data({
    arc200_approve0_273: ctc13,
    arc200_transfer0_273: ctc13,
    arc200_transferFrom0_273: ctc14,
    createAllowanceBox0_273: ctc15,
    createBalanceBox0_273: ctc16,
    deregister0_273: ctc17,
    grant0_273: ctc16,
    nop0_273: ctc17,
    register0_273: ctc18,
    touch0_273: ctc17
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2005, v2006, v2007, v2010, v2013, v2024, v2026, v2030] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc3, ctc7, ctc1, ctc4, ctc10, ctc12, ctc4]);
  const v2067 = ctc.selfAddress();
  const v2069 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:220:44:application call to [unknown function] (defined at: ./index.rsh:220:44:function exp)', 'at ./index.rsh:163:29:application call to "runarc200_transfer0_273" (defined at: ./index.rsh:220:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'in',
    who: 'arc200_transfer'
    });
  const v2070 = v2069[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2071 = v2069[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2075 = stdlib.addressEq(v2067, v2070);
  const v2076 = v2075 ? false : true;
  stdlib.assert(v2076, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:211:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:221:18:application call to "chkTransfer" (defined at: ./index.rsh:210:48:function exp)', 'at ./index.rsh:220:44:application call to [unknown function] (defined at: ./index.rsh:220:44:function exp)', 'at ./index.rsh:163:29:application call to "runarc200_transfer0_273" (defined at: ./index.rsh:220:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'ARC200: Transfer to self',
    who: 'arc200_transfer'
    });
  const v2078 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2067, ctc1), null);
  const v2079 = stdlib.fromSome(v2078, stdlib.checkedBigNumberify('./index.rsh:175:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v2080 = stdlib.ge256(v2079, v2071);
  stdlib.assert(v2080, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:212:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:221:18:application call to "chkTransfer" (defined at: ./index.rsh:210:48:function exp)', 'at ./index.rsh:220:44:application call to [unknown function] (defined at: ./index.rsh:220:44:function exp)', 'at ./index.rsh:163:29:application call to "runarc200_transfer0_273" (defined at: ./index.rsh:220:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'ARC200: Transfer amount must not be greater than balance',
    who: 'arc200_transfer'
    });
  const v2089 = ['arc200_transfer0_273', v2069];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2005, v2006, v2007, v2010, v2013, v2024, v2026, v2030, v2089],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [stdlib.checkedBigNumberify('./index.rsh:220:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2304], secs: v2306, time: v2305, didSend: v1393, from: v2303 } = txn1;
      
      switch (v2304[0]) {
        case 'arc200_approve0_273': {
          const v2307 = v2304[1];
          
          break;
          }
        case 'arc200_transfer0_273': {
          const v2613 = v2304[1];
          sim_r.txns.push({
            kind: 'api',
            who: "arc200_transfer"
            });
          ;
          const v2670 = v2613[stdlib.checkedBigNumberify('./index.rsh:220:10:spread', stdlib.UInt_max, '0')];
          const v2671 = v2613[stdlib.checkedBigNumberify('./index.rsh:220:10:spread', stdlib.UInt_max, '1')];
          const v2676 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v2303, ctc1), null);
          const v2677 = stdlib.fromSome(v2676, stdlib.checkedBigNumberify('./index.rsh:175:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2682 = true;
          const v2683 = await txn1.getOutput('arc200_transfer', 'v2682', ctc11, v2682);
          
          const v2694 = stdlib.safeSub256(v2677, v2671);
          await stdlib.simMapSet(sim_r, 0, ctc3, v2303, ctc1, v2694);
          const v2695 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v2670, ctc1), null);
          const v2696 = stdlib.fromSome(v2695, stdlib.checkedBigNumberify('./index.rsh:175:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2697 = stdlib.safeAdd256(v2696, v2671);
          await stdlib.simMapSet(sim_r, 0, ctc3, v2670, ctc1, v2697);
          null;
          const v7659 = v2026;
          const v7661 = v2030;
          sim_r.isHalt = false;
          
          break;
          }
        case 'arc200_transferFrom0_273': {
          const v2919 = v2304[1];
          
          break;
          }
        case 'createAllowanceBox0_273': {
          const v3225 = v2304[1];
          
          break;
          }
        case 'createBalanceBox0_273': {
          const v3531 = v2304[1];
          
          break;
          }
        case 'deregister0_273': {
          const v3837 = v2304[1];
          
          break;
          }
        case 'grant0_273': {
          const v4143 = v2304[1];
          
          break;
          }
        case 'nop0_273': {
          const v4449 = v2304[1];
          
          break;
          }
        case 'register0_273': {
          const v4755 = v2304[1];
          
          break;
          }
        case 'touch0_273': {
          const v5061 = v2304[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc7, ctc1, ctc4, ctc10, ctc12, ctc4, ctc19],
    waitIfNotPresent: false
    }));
  const {data: [v2304], secs: v2306, time: v2305, didSend: v1393, from: v2303 } = txn1;
  switch (v2304[0]) {
    case 'arc200_approve0_273': {
      const v2307 = v2304[1];
      return;
      break;
      }
    case 'arc200_transfer0_273': {
      const v2613 = v2304[1];
      undefined /* setApiDetails */;
      ;
      const v2670 = v2613[stdlib.checkedBigNumberify('./index.rsh:220:10:spread', stdlib.UInt_max, '0')];
      const v2671 = v2613[stdlib.checkedBigNumberify('./index.rsh:220:10:spread', stdlib.UInt_max, '1')];
      const v2673 = stdlib.addressEq(v2303, v2670);
      const v2674 = v2673 ? false : true;
      stdlib.assert(v2674, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:211:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:221:18:application call to "chkTransfer" (defined at: ./index.rsh:210:48:function exp)', 'at ./index.rsh:223:13:application call to [unknown function] (defined at: ./index.rsh:223:13:function exp)'],
        msg: 'ARC200: Transfer to self',
        who: 'arc200_transfer'
        });
      const v2676 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2303, ctc1), null);
      const v2677 = stdlib.fromSome(v2676, stdlib.checkedBigNumberify('./index.rsh:175:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2678 = stdlib.ge256(v2677, v2671);
      stdlib.assert(v2678, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:212:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:221:18:application call to "chkTransfer" (defined at: ./index.rsh:210:48:function exp)', 'at ./index.rsh:223:13:application call to [unknown function] (defined at: ./index.rsh:223:13:function exp)'],
        msg: 'ARC200: Transfer amount must not be greater than balance',
        who: 'arc200_transfer'
        });
      const v2682 = true;
      const v2683 = await txn1.getOutput('arc200_transfer', 'v2682', ctc11, v2682);
      if (v1393) {
        stdlib.protect(ctc0, await interact.out(v2613, v2683), {
          at: './index.rsh:220:11:application',
          fs: ['at ./index.rsh:220:11:application call to [unknown function] (defined at: ./index.rsh:220:11:function exp)', 'at ./index.rsh:224:12:application call to "k" (defined at: ./index.rsh:223:13:function exp)', 'at ./index.rsh:223:13:application call to [unknown function] (defined at: ./index.rsh:223:13:function exp)'],
          msg: 'out',
          who: 'arc200_transfer'
          });
        }
      else {
        }
      
      const v2694 = stdlib.safeSub256(v2677, v2671);
      await stdlib.mapSet(map0, ctc3, v2303, ctc1, v2694);
      const v2695 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2670, ctc1), null);
      const v2696 = stdlib.fromSome(v2695, stdlib.checkedBigNumberify('./index.rsh:175:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2697 = stdlib.safeAdd256(v2696, v2671);
      await stdlib.mapSet(map0, ctc3, v2670, ctc1, v2697);
      null;
      const v7659 = v2026;
      const v7661 = v2030;
      return;
      
      break;
      }
    case 'arc200_transferFrom0_273': {
      const v2919 = v2304[1];
      return;
      break;
      }
    case 'createAllowanceBox0_273': {
      const v3225 = v2304[1];
      return;
      break;
      }
    case 'createBalanceBox0_273': {
      const v3531 = v2304[1];
      return;
      break;
      }
    case 'deregister0_273': {
      const v3837 = v2304[1];
      return;
      break;
      }
    case 'grant0_273': {
      const v4143 = v2304[1];
      return;
      break;
      }
    case 'nop0_273': {
      const v4449 = v2304[1];
      return;
      break;
      }
    case 'register0_273': {
      const v4755 = v2304[1];
      return;
      break;
      }
    case 'touch0_273': {
      const v5061 = v2304[1];
      return;
      break;
      }
    }
  
  
  };
export async function _arc200_transferFrom3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _arc200_transferFrom3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _arc200_transferFrom3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6,
    totalSupply: ctc1
    });
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc9 = stdlib.T_Struct([['votekey', ctc5], ['selkey', ctc5], ['spkey', ctc8], ['votefst', ctc4], ['votelst', ctc4], ['votekd', ctc4]]);
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc9
    });
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Object({
    keyInfo: ctc10,
    manager: ctc3,
    registered: ctc11
    });
  const ctc13 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc15 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc3]);
  const ctc17 = stdlib.T_Tuple([]);
  const ctc18 = stdlib.T_Tuple([ctc5, ctc5, ctc8, ctc4, ctc4, ctc4]);
  const ctc19 = stdlib.T_Data({
    arc200_approve0_273: ctc15,
    arc200_transfer0_273: ctc15,
    arc200_transferFrom0_273: ctc13,
    createAllowanceBox0_273: ctc14,
    createBalanceBox0_273: ctc16,
    deregister0_273: ctc17,
    grant0_273: ctc16,
    nop0_273: ctc17,
    register0_273: ctc18,
    touch0_273: ctc17
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2005, v2006, v2007, v2010, v2013, v2024, v2026, v2030] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc3, ctc7, ctc1, ctc4, ctc10, ctc12, ctc4]);
  const v2091 = ctc.selfAddress();
  const v2093 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:247:55:application call to [unknown function] (defined at: ./index.rsh:247:55:function exp)', 'at ./index.rsh:163:29:application call to "runarc200_transferFrom0_273" (defined at: ./index.rsh:247:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'in',
    who: 'arc200_transferFrom'
    });
  const v2094 = v2093[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2095 = v2093[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2096 = v2093[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v2101 = stdlib.addressEq(v2094, v2095);
  const v2102 = v2101 ? false : true;
  stdlib.assert(v2102, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:232:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:248:22:application call to "chkTransferFrom" (defined at: ./index.rsh:231:62:function exp)', 'at ./index.rsh:247:55:application call to [unknown function] (defined at: ./index.rsh:247:55:function exp)', 'at ./index.rsh:163:29:application call to "runarc200_transferFrom0_273" (defined at: ./index.rsh:247:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'ARC200: Transfer to self',
    who: 'arc200_transferFrom'
    });
  const v2104 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2094, ctc1), null);
  const v2105 = stdlib.fromSome(v2104, stdlib.checkedBigNumberify('./index.rsh:175:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v2106 = stdlib.ge256(v2105, v2096);
  stdlib.assert(v2106, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:233:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:248:22:application call to "chkTransferFrom" (defined at: ./index.rsh:231:62:function exp)', 'at ./index.rsh:247:55:application call to [unknown function] (defined at: ./index.rsh:247:55:function exp)', 'at ./index.rsh:163:29:application call to "runarc200_transferFrom0_273" (defined at: ./index.rsh:247:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'ARC200: Amount must not be greater than balance',
    who: 'arc200_transferFrom'
    });
  const v2108 = [v2094, v2091];
  const v2109 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc14, v2108, ctc1), null);
  const v2110 = stdlib.fromSome(v2109, stdlib.checkedBigNumberify('./index.rsh:181:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v2111 = stdlib.ge256(v2110, v2096);
  stdlib.assert(v2111, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:237:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:248:22:application call to "chkTransferFrom" (defined at: ./index.rsh:231:62:function exp)', 'at ./index.rsh:247:55:application call to [unknown function] (defined at: ./index.rsh:247:55:function exp)', 'at ./index.rsh:163:29:application call to "runarc200_transferFrom0_273" (defined at: ./index.rsh:247:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'ARC200: Amount must not be greater than allowance',
    who: 'arc200_transferFrom'
    });
  const v2122 = ['arc200_transferFrom0_273', v2093];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2005, v2006, v2007, v2010, v2013, v2024, v2026, v2030, v2122],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [stdlib.checkedBigNumberify('./index.rsh:247:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2304], secs: v2306, time: v2305, didSend: v1393, from: v2303 } = txn1;
      
      switch (v2304[0]) {
        case 'arc200_approve0_273': {
          const v2307 = v2304[1];
          
          break;
          }
        case 'arc200_transfer0_273': {
          const v2613 = v2304[1];
          
          break;
          }
        case 'arc200_transferFrom0_273': {
          const v2919 = v2304[1];
          sim_r.txns.push({
            kind: 'api',
            who: "arc200_transferFrom"
            });
          ;
          const v3007 = v2919[stdlib.checkedBigNumberify('./index.rsh:247:10:spread', stdlib.UInt_max, '0')];
          const v3008 = v2919[stdlib.checkedBigNumberify('./index.rsh:247:10:spread', stdlib.UInt_max, '1')];
          const v3009 = v2919[stdlib.checkedBigNumberify('./index.rsh:247:10:spread', stdlib.UInt_max, '2')];
          const v3014 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v3007, ctc1), null);
          const v3015 = stdlib.fromSome(v3014, stdlib.checkedBigNumberify('./index.rsh:175:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3018 = [v3007, v2303];
          const v3019 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc14, v3018, ctc1), null);
          const v3020 = stdlib.fromSome(v3019, stdlib.checkedBigNumberify('./index.rsh:181:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3030 = stdlib.safeSub256(v3015, v3009);
          await stdlib.simMapSet(sim_r, 0, ctc3, v3007, ctc1, v3030);
          const v3031 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v3008, ctc1), null);
          const v3032 = stdlib.fromSome(v3031, stdlib.checkedBigNumberify('./index.rsh:175:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3033 = stdlib.safeAdd256(v3032, v3009);
          await stdlib.simMapSet(sim_r, 0, ctc3, v3008, ctc1, v3033);
          null;
          const v3038 = stdlib.safeSub256(v3020, v3009);
          await stdlib.simMapSet(sim_r, 1, ctc14, v3018, ctc1, v3038);
          null;
          const v3041 = true;
          const v3042 = await txn1.getOutput('arc200_transferFrom', 'v3041', ctc11, v3041);
          
          const v7695 = v2026;
          const v7697 = v2030;
          sim_r.isHalt = false;
          
          break;
          }
        case 'createAllowanceBox0_273': {
          const v3225 = v2304[1];
          
          break;
          }
        case 'createBalanceBox0_273': {
          const v3531 = v2304[1];
          
          break;
          }
        case 'deregister0_273': {
          const v3837 = v2304[1];
          
          break;
          }
        case 'grant0_273': {
          const v4143 = v2304[1];
          
          break;
          }
        case 'nop0_273': {
          const v4449 = v2304[1];
          
          break;
          }
        case 'register0_273': {
          const v4755 = v2304[1];
          
          break;
          }
        case 'touch0_273': {
          const v5061 = v2304[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc7, ctc1, ctc4, ctc10, ctc12, ctc4, ctc19],
    waitIfNotPresent: false
    }));
  const {data: [v2304], secs: v2306, time: v2305, didSend: v1393, from: v2303 } = txn1;
  switch (v2304[0]) {
    case 'arc200_approve0_273': {
      const v2307 = v2304[1];
      return;
      break;
      }
    case 'arc200_transfer0_273': {
      const v2613 = v2304[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_273': {
      const v2919 = v2304[1];
      undefined /* setApiDetails */;
      ;
      const v3007 = v2919[stdlib.checkedBigNumberify('./index.rsh:247:10:spread', stdlib.UInt_max, '0')];
      const v3008 = v2919[stdlib.checkedBigNumberify('./index.rsh:247:10:spread', stdlib.UInt_max, '1')];
      const v3009 = v2919[stdlib.checkedBigNumberify('./index.rsh:247:10:spread', stdlib.UInt_max, '2')];
      const v3011 = stdlib.addressEq(v3007, v3008);
      const v3012 = v3011 ? false : true;
      stdlib.assert(v3012, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:232:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:248:22:application call to "chkTransferFrom" (defined at: ./index.rsh:231:62:function exp)', 'at ./index.rsh:250:13:application call to [unknown function] (defined at: ./index.rsh:250:13:function exp)'],
        msg: 'ARC200: Transfer to self',
        who: 'arc200_transferFrom'
        });
      const v3014 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v3007, ctc1), null);
      const v3015 = stdlib.fromSome(v3014, stdlib.checkedBigNumberify('./index.rsh:175:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v3016 = stdlib.ge256(v3015, v3009);
      stdlib.assert(v3016, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:233:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:248:22:application call to "chkTransferFrom" (defined at: ./index.rsh:231:62:function exp)', 'at ./index.rsh:250:13:application call to [unknown function] (defined at: ./index.rsh:250:13:function exp)'],
        msg: 'ARC200: Amount must not be greater than balance',
        who: 'arc200_transferFrom'
        });
      const v3018 = [v3007, v2303];
      const v3019 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc14, v3018, ctc1), null);
      const v3020 = stdlib.fromSome(v3019, stdlib.checkedBigNumberify('./index.rsh:181:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v3021 = stdlib.ge256(v3020, v3009);
      stdlib.assert(v3021, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:237:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:248:22:application call to "chkTransferFrom" (defined at: ./index.rsh:231:62:function exp)', 'at ./index.rsh:250:13:application call to [unknown function] (defined at: ./index.rsh:250:13:function exp)'],
        msg: 'ARC200: Amount must not be greater than allowance',
        who: 'arc200_transferFrom'
        });
      const v3030 = stdlib.safeSub256(v3015, v3009);
      await stdlib.mapSet(map0, ctc3, v3007, ctc1, v3030);
      const v3031 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v3008, ctc1), null);
      const v3032 = stdlib.fromSome(v3031, stdlib.checkedBigNumberify('./index.rsh:175:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v3033 = stdlib.safeAdd256(v3032, v3009);
      await stdlib.mapSet(map0, ctc3, v3008, ctc1, v3033);
      null;
      const v3038 = stdlib.safeSub256(v3020, v3009);
      await stdlib.mapSet(map1, ctc14, v3018, ctc1, v3038);
      null;
      const v3041 = true;
      const v3042 = await txn1.getOutput('arc200_transferFrom', 'v3041', ctc11, v3041);
      if (v1393) {
        stdlib.protect(ctc0, await interact.out(v2919, v3042), {
          at: './index.rsh:247:11:application',
          fs: ['at ./index.rsh:247:11:application call to [unknown function] (defined at: ./index.rsh:247:11:function exp)', 'at ./index.rsh:252:12:application call to "k" (defined at: ./index.rsh:250:13:function exp)', 'at ./index.rsh:250:13:application call to [unknown function] (defined at: ./index.rsh:250:13:function exp)'],
          msg: 'out',
          who: 'arc200_transferFrom'
          });
        }
      else {
        }
      
      const v7695 = v2026;
      const v7697 = v2030;
      return;
      
      break;
      }
    case 'createAllowanceBox0_273': {
      const v3225 = v2304[1];
      return;
      break;
      }
    case 'createBalanceBox0_273': {
      const v3531 = v2304[1];
      return;
      break;
      }
    case 'deregister0_273': {
      const v3837 = v2304[1];
      return;
      break;
      }
    case 'grant0_273': {
      const v4143 = v2304[1];
      return;
      break;
      }
    case 'nop0_273': {
      const v4449 = v2304[1];
      return;
      break;
      }
    case 'register0_273': {
      const v4755 = v2304[1];
      return;
      break;
      }
    case 'touch0_273': {
      const v5061 = v2304[1];
      return;
      break;
      }
    }
  
  
  };
export async function _createAllowanceBox3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _createAllowanceBox3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _createAllowanceBox3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6,
    totalSupply: ctc1
    });
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc9 = stdlib.T_Struct([['votekey', ctc5], ['selkey', ctc5], ['spkey', ctc8], ['votefst', ctc4], ['votelst', ctc4], ['votekd', ctc4]]);
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc9
    });
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Object({
    keyInfo: ctc10,
    manager: ctc3,
    registered: ctc11
    });
  const ctc13 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc14 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc3]);
  const ctc17 = stdlib.T_Tuple([]);
  const ctc18 = stdlib.T_Tuple([ctc5, ctc5, ctc8, ctc4, ctc4, ctc4]);
  const ctc19 = stdlib.T_Data({
    arc200_approve0_273: ctc14,
    arc200_transfer0_273: ctc14,
    arc200_transferFrom0_273: ctc15,
    createAllowanceBox0_273: ctc13,
    createBalanceBox0_273: ctc16,
    deregister0_273: ctc17,
    grant0_273: ctc16,
    nop0_273: ctc17,
    register0_273: ctc18,
    touch0_273: ctc17
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2005, v2006, v2007, v2010, v2013, v2024, v2026, v2030] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc3, ctc7, ctc1, ctc4, ctc10, ctc12, ctc4]);
  const v2164 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:287:50:application call to [unknown function] (defined at: ./index.rsh:287:50:function exp)', 'at ./index.rsh:163:29:application call to "runcreateAllowanceBox0_273" (defined at: ./index.rsh:287:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'in',
    who: 'createAllowanceBox'
    });
  const v2165 = v2164[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2166 = v2164[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2169 = [v2165, v2166];
  const v2170 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc13, v2169, ctc1), null);
  const v2171 = {
    None: 0,
    Some: 1
    }[v2170[0]];
  const v2172 = stdlib.eq(v2171, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
  stdlib.assert(v2172, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:288:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:287:50:application call to [unknown function] (defined at: ./index.rsh:287:50:function exp)', 'at ./index.rsh:163:29:application call to "runcreateAllowanceBox0_273" (defined at: ./index.rsh:287:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'ARC200: Allowance box already exists',
    who: 'createAllowanceBox'
    });
  const v2181 = ['createAllowanceBox0_273', v2164];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2005, v2006, v2007, v2010, v2013, v2024, v2026, v2030, v2181],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [stdlib.checkedBigNumberify('./index.rsh:287:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2304], secs: v2306, time: v2305, didSend: v1393, from: v2303 } = txn1;
      
      switch (v2304[0]) {
        case 'arc200_approve0_273': {
          const v2307 = v2304[1];
          
          break;
          }
        case 'arc200_transfer0_273': {
          const v2613 = v2304[1];
          
          break;
          }
        case 'arc200_transferFrom0_273': {
          const v2919 = v2304[1];
          
          break;
          }
        case 'createAllowanceBox0_273': {
          const v3225 = v2304[1];
          sim_r.txns.push({
            kind: 'api',
            who: "createAllowanceBox"
            });
          ;
          const v3358 = v3225[stdlib.checkedBigNumberify('./index.rsh:287:10:spread', stdlib.UInt_max, '0')];
          const v3359 = v3225[stdlib.checkedBigNumberify('./index.rsh:287:10:spread', stdlib.UInt_max, '1')];
          const v3360 = [v3358, v3359];
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc13, v3360, ctc1), null);
          await stdlib.simMapSet(sim_r, 1, ctc13, v3360, ctc1, stdlib.checkedBigNumberify('./index.rsh:294:50:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3368 = true;
          const v3369 = await txn1.getOutput('createAllowanceBox', 'v3368', ctc11, v3368);
          
          const v7731 = v2026;
          const v7733 = v2030;
          sim_r.isHalt = false;
          
          break;
          }
        case 'createBalanceBox0_273': {
          const v3531 = v2304[1];
          
          break;
          }
        case 'deregister0_273': {
          const v3837 = v2304[1];
          
          break;
          }
        case 'grant0_273': {
          const v4143 = v2304[1];
          
          break;
          }
        case 'nop0_273': {
          const v4449 = v2304[1];
          
          break;
          }
        case 'register0_273': {
          const v4755 = v2304[1];
          
          break;
          }
        case 'touch0_273': {
          const v5061 = v2304[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc7, ctc1, ctc4, ctc10, ctc12, ctc4, ctc19],
    waitIfNotPresent: false
    }));
  const {data: [v2304], secs: v2306, time: v2305, didSend: v1393, from: v2303 } = txn1;
  switch (v2304[0]) {
    case 'arc200_approve0_273': {
      const v2307 = v2304[1];
      return;
      break;
      }
    case 'arc200_transfer0_273': {
      const v2613 = v2304[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_273': {
      const v2919 = v2304[1];
      return;
      break;
      }
    case 'createAllowanceBox0_273': {
      const v3225 = v2304[1];
      undefined /* setApiDetails */;
      ;
      const v3358 = v3225[stdlib.checkedBigNumberify('./index.rsh:287:10:spread', stdlib.UInt_max, '0')];
      const v3359 = v3225[stdlib.checkedBigNumberify('./index.rsh:287:10:spread', stdlib.UInt_max, '1')];
      const v3360 = [v3358, v3359];
      const v3361 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc13, v3360, ctc1), null);
      const v3362 = {
        None: 0,
        Some: 1
        }[v3361[0]];
      const v3363 = stdlib.eq(v3362, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
      stdlib.assert(v3363, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:288:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:293:13:application call to [unknown function] (defined at: ./index.rsh:293:13:function exp)'],
        msg: 'ARC200: Allowance box already exists',
        who: 'createAllowanceBox'
        });
      await stdlib.mapSet(map1, ctc13, v3360, ctc1, stdlib.checkedBigNumberify('./index.rsh:294:50:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v3368 = true;
      const v3369 = await txn1.getOutput('createAllowanceBox', 'v3368', ctc11, v3368);
      if (v1393) {
        stdlib.protect(ctc0, await interact.out(v3225, v3369), {
          at: './index.rsh:287:11:application',
          fs: ['at ./index.rsh:287:11:application call to [unknown function] (defined at: ./index.rsh:287:11:function exp)', 'at ./index.rsh:295:12:application call to "k" (defined at: ./index.rsh:293:13:function exp)', 'at ./index.rsh:293:13:application call to [unknown function] (defined at: ./index.rsh:293:13:function exp)'],
          msg: 'out',
          who: 'createAllowanceBox'
          });
        }
      else {
        }
      
      const v7731 = v2026;
      const v7733 = v2030;
      return;
      
      break;
      }
    case 'createBalanceBox0_273': {
      const v3531 = v2304[1];
      return;
      break;
      }
    case 'deregister0_273': {
      const v3837 = v2304[1];
      return;
      break;
      }
    case 'grant0_273': {
      const v4143 = v2304[1];
      return;
      break;
      }
    case 'nop0_273': {
      const v4449 = v2304[1];
      return;
      break;
      }
    case 'register0_273': {
      const v4755 = v2304[1];
      return;
      break;
      }
    case 'touch0_273': {
      const v5061 = v2304[1];
      return;
      break;
      }
    }
  
  
  };
export async function _createBalanceBox3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _createBalanceBox3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _createBalanceBox3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6,
    totalSupply: ctc1
    });
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc9 = stdlib.T_Struct([['votekey', ctc5], ['selkey', ctc5], ['spkey', ctc8], ['votefst', ctc4], ['votelst', ctc4], ['votekd', ctc4]]);
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc9
    });
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Object({
    keyInfo: ctc10,
    manager: ctc3,
    registered: ctc11
    });
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc17 = stdlib.T_Tuple([]);
  const ctc18 = stdlib.T_Tuple([ctc5, ctc5, ctc8, ctc4, ctc4, ctc4]);
  const ctc19 = stdlib.T_Data({
    arc200_approve0_273: ctc14,
    arc200_transfer0_273: ctc14,
    arc200_transferFrom0_273: ctc15,
    createAllowanceBox0_273: ctc16,
    createBalanceBox0_273: ctc13,
    deregister0_273: ctc17,
    grant0_273: ctc13,
    nop0_273: ctc17,
    register0_273: ctc18,
    touch0_273: ctc17
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2005, v2006, v2007, v2010, v2013, v2024, v2026, v2030] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc3, ctc7, ctc1, ctc4, ctc10, ctc12, ctc4]);
  const v2148 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:275:38:application call to [unknown function] (defined at: ./index.rsh:275:38:function exp)', 'at ./index.rsh:163:29:application call to "runcreateBalanceBox0_273" (defined at: ./index.rsh:275:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'in',
    who: 'createBalanceBox'
    });
  const v2149 = v2148[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2151 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2149, ctc1), null);
  const v2152 = {
    None: 0,
    Some: 1
    }[v2151[0]];
  const v2153 = stdlib.eq(v2152, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
  stdlib.assert(v2153, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:276:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:275:38:application call to [unknown function] (defined at: ./index.rsh:275:38:function exp)', 'at ./index.rsh:163:29:application call to "runcreateBalanceBox0_273" (defined at: ./index.rsh:275:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'ARC200: Balance box already exists',
    who: 'createBalanceBox'
    });
  const v2160 = ['createBalanceBox0_273', v2148];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2005, v2006, v2007, v2010, v2013, v2024, v2026, v2030, v2160],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [stdlib.checkedBigNumberify('./index.rsh:275:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2304], secs: v2306, time: v2305, didSend: v1393, from: v2303 } = txn1;
      
      switch (v2304[0]) {
        case 'arc200_approve0_273': {
          const v2307 = v2304[1];
          
          break;
          }
        case 'arc200_transfer0_273': {
          const v2613 = v2304[1];
          
          break;
          }
        case 'arc200_transferFrom0_273': {
          const v2919 = v2304[1];
          
          break;
          }
        case 'createAllowanceBox0_273': {
          const v3225 = v2304[1];
          
          break;
          }
        case 'createBalanceBox0_273': {
          const v3531 = v2304[1];
          sim_r.txns.push({
            kind: 'api',
            who: "createBalanceBox"
            });
          ;
          const v3684 = v3531[stdlib.checkedBigNumberify('./index.rsh:275:10:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v3684, ctc1), null);
          await stdlib.simMapSet(sim_r, 0, ctc3, v3684, ctc1, stdlib.checkedBigNumberify('./index.rsh:279:36:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3690 = true;
          const v3691 = await txn1.getOutput('createBalanceBox', 'v3690', ctc11, v3690);
          
          const v7767 = v2026;
          const v7769 = v2030;
          sim_r.isHalt = false;
          
          break;
          }
        case 'deregister0_273': {
          const v3837 = v2304[1];
          
          break;
          }
        case 'grant0_273': {
          const v4143 = v2304[1];
          
          break;
          }
        case 'nop0_273': {
          const v4449 = v2304[1];
          
          break;
          }
        case 'register0_273': {
          const v4755 = v2304[1];
          
          break;
          }
        case 'touch0_273': {
          const v5061 = v2304[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc7, ctc1, ctc4, ctc10, ctc12, ctc4, ctc19],
    waitIfNotPresent: false
    }));
  const {data: [v2304], secs: v2306, time: v2305, didSend: v1393, from: v2303 } = txn1;
  switch (v2304[0]) {
    case 'arc200_approve0_273': {
      const v2307 = v2304[1];
      return;
      break;
      }
    case 'arc200_transfer0_273': {
      const v2613 = v2304[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_273': {
      const v2919 = v2304[1];
      return;
      break;
      }
    case 'createAllowanceBox0_273': {
      const v3225 = v2304[1];
      return;
      break;
      }
    case 'createBalanceBox0_273': {
      const v3531 = v2304[1];
      undefined /* setApiDetails */;
      ;
      const v3684 = v3531[stdlib.checkedBigNumberify('./index.rsh:275:10:spread', stdlib.UInt_max, '0')];
      const v3685 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v3684, ctc1), null);
      const v3686 = {
        None: 0,
        Some: 1
        }[v3685[0]];
      const v3687 = stdlib.eq(v3686, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
      stdlib.assert(v3687, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:276:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:278:13:application call to [unknown function] (defined at: ./index.rsh:278:13:function exp)'],
        msg: 'ARC200: Balance box already exists',
        who: 'createBalanceBox'
        });
      await stdlib.mapSet(map0, ctc3, v3684, ctc1, stdlib.checkedBigNumberify('./index.rsh:279:36:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v3690 = true;
      const v3691 = await txn1.getOutput('createBalanceBox', 'v3690', ctc11, v3690);
      if (v1393) {
        stdlib.protect(ctc0, await interact.out(v3531, v3691), {
          at: './index.rsh:275:11:application',
          fs: ['at ./index.rsh:275:11:application call to [unknown function] (defined at: ./index.rsh:275:11:function exp)', 'at ./index.rsh:280:12:application call to "k" (defined at: ./index.rsh:278:13:function exp)', 'at ./index.rsh:278:13:application call to [unknown function] (defined at: ./index.rsh:278:13:function exp)'],
          msg: 'out',
          who: 'createBalanceBox'
          });
        }
      else {
        }
      
      const v7767 = v2026;
      const v7769 = v2030;
      return;
      
      break;
      }
    case 'deregister0_273': {
      const v3837 = v2304[1];
      return;
      break;
      }
    case 'grant0_273': {
      const v4143 = v2304[1];
      return;
      break;
      }
    case 'nop0_273': {
      const v4449 = v2304[1];
      return;
      break;
      }
    case 'register0_273': {
      const v4755 = v2304[1];
      return;
      break;
      }
    case 'touch0_273': {
      const v5061 = v2304[1];
      return;
      break;
      }
    }
  
  
  };
export async function _deregister3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _deregister3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _deregister3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6,
    totalSupply: ctc1
    });
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc9 = stdlib.T_Struct([['votekey', ctc5], ['selkey', ctc5], ['spkey', ctc8], ['votefst', ctc4], ['votelst', ctc4], ['votekd', ctc4]]);
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc9
    });
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Object({
    keyInfo: ctc10,
    manager: ctc3,
    registered: ctc11
    });
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc3]);
  const ctc18 = stdlib.T_Tuple([ctc5, ctc5, ctc8, ctc4, ctc4, ctc4]);
  const ctc19 = stdlib.T_Data({
    arc200_approve0_273: ctc14,
    arc200_transfer0_273: ctc14,
    arc200_transferFrom0_273: ctc15,
    createAllowanceBox0_273: ctc16,
    createBalanceBox0_273: ctc17,
    deregister0_273: ctc13,
    grant0_273: ctc17,
    nop0_273: ctc13,
    register0_273: ctc18,
    touch0_273: ctc13
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2005, v2006, v2007, v2010, v2013, v2024, v2026, v2030] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc3, ctc7, ctc1, ctc4, ctc10, ctc12, ctc4]);
  const v2218 = ctc.selfAddress();
  const v2220 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:331:28:application call to [unknown function] (defined at: ./index.rsh:331:28:function exp)', 'at ./index.rsh:163:29:application call to "runderegister0_273" (defined at: ./index.rsh:331:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'in',
    who: 'deregister'
    });
  const v2221 = v2026.manager;
  const v2222 = stdlib.addressEq(v2218, v2221);
  stdlib.assert(v2222, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:332:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:331:28:application call to [unknown function] (defined at: ./index.rsh:331:28:function exp)', 'at ./index.rsh:163:29:application call to "runderegister0_273" (defined at: ./index.rsh:331:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'ARC200: Only manager can grant',
    who: 'deregister'
    });
  const v2224 = v2026.registered;
  stdlib.assert(v2224, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:333:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:331:28:application call to [unknown function] (defined at: ./index.rsh:331:28:function exp)', 'at ./index.rsh:163:29:application call to "runderegister0_273" (defined at: ./index.rsh:331:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'Must be registered',
    who: 'deregister'
    });
  const v2226 = v2026.keyInfo;
  const v2227 = {
    None: 0,
    Some: 1
    }[v2226[0]];
  const v2228 = stdlib.eq(v2227, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
  const v2229 = v2228 ? false : true;
  stdlib.assert(v2229, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:334:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:331:28:application call to [unknown function] (defined at: ./index.rsh:331:28:function exp)', 'at ./index.rsh:163:29:application call to "runderegister0_273" (defined at: ./index.rsh:331:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'Must have key info',
    who: 'deregister'
    });
  const v2234 = ['deregister0_273', v2220];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2005, v2006, v2007, v2010, v2013, v2024, v2026, v2030, v2234],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [stdlib.checkedBigNumberify('./index.rsh:336:9:decimal', stdlib.UInt_max, '1000'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2304], secs: v2306, time: v2305, didSend: v1393, from: v2303 } = txn1;
      
      switch (v2304[0]) {
        case 'arc200_approve0_273': {
          const v2307 = v2304[1];
          
          break;
          }
        case 'arc200_transfer0_273': {
          const v2613 = v2304[1];
          
          break;
          }
        case 'arc200_transferFrom0_273': {
          const v2919 = v2304[1];
          
          break;
          }
        case 'createAllowanceBox0_273': {
          const v3225 = v2304[1];
          
          break;
          }
        case 'createBalanceBox0_273': {
          const v3531 = v2304[1];
          
          break;
          }
        case 'deregister0_273': {
          const v3837 = v2304[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deregister"
            });
          const v3847 = v2026.manager;
          const v3852 = v2026.keyInfo;
          const v3871 = stdlib.add(v2030, stdlib.checkedBigNumberify('./index.rsh:336:9:decimal', stdlib.UInt_max, '1000'));
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:336:9:decimal', stdlib.UInt_max, '1000'),
            kind: 'to',
            tok: undefined /* Nothing */
            });
          switch (v3852[0]) {
            case 'None': {
              const v4016 = v3852[1];
              const v4017 = false;
              const v4018 = await txn1.getOutput('deregister', 'v4017', ctc11, v4017);
              
              const v7803 = v2026;
              const v7805 = v3871;
              sim_r.isHalt = false;
              
              break;
              }
            case 'Some': {
              const v4026 = v3852[1];
              const v4027 = true;
              const v4028 = await txn1.getOutput('deregister', 'v4027', ctc11, v4027);
              
              null;
              const v4042 = stdlib.sub(v3871, stdlib.checkedBigNumberify('./index.rsh:344:24:decimal', stdlib.UInt_max, '1000'));
              sim_r.txns.push({
                kind: 'from',
                to: v2303,
                tok: undefined /* Nothing */
                });
              const v4047 = {
                keyInfo: v2024,
                manager: v3847,
                registered: false
                };
              const v7806 = v4047;
              const v7808 = v4042;
              sim_r.isHalt = false;
              
              break;
              }
            }
          break;
          }
        case 'grant0_273': {
          const v4143 = v2304[1];
          
          break;
          }
        case 'nop0_273': {
          const v4449 = v2304[1];
          
          break;
          }
        case 'register0_273': {
          const v4755 = v2304[1];
          
          break;
          }
        case 'touch0_273': {
          const v5061 = v2304[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc7, ctc1, ctc4, ctc10, ctc12, ctc4, ctc19],
    waitIfNotPresent: false
    }));
  const {data: [v2304], secs: v2306, time: v2305, didSend: v1393, from: v2303 } = txn1;
  switch (v2304[0]) {
    case 'arc200_approve0_273': {
      const v2307 = v2304[1];
      return;
      break;
      }
    case 'arc200_transfer0_273': {
      const v2613 = v2304[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_273': {
      const v2919 = v2304[1];
      return;
      break;
      }
    case 'createAllowanceBox0_273': {
      const v3225 = v2304[1];
      return;
      break;
      }
    case 'createBalanceBox0_273': {
      const v3531 = v2304[1];
      return;
      break;
      }
    case 'deregister0_273': {
      const v3837 = v2304[1];
      undefined /* setApiDetails */;
      const v3847 = v2026.manager;
      const v3848 = stdlib.addressEq(v2303, v3847);
      stdlib.assert(v3848, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:332:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:331:28:application call to [unknown function] (defined at: ./index.rsh:331:28:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:331:28:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
        msg: 'ARC200: Only manager can grant',
        who: 'deregister'
        });
      const v3850 = v2026.registered;
      stdlib.assert(v3850, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:333:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:331:28:application call to [unknown function] (defined at: ./index.rsh:331:28:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:331:28:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
        msg: 'Must be registered',
        who: 'deregister'
        });
      const v3852 = v2026.keyInfo;
      const v3853 = {
        None: 0,
        Some: 1
        }[v3852[0]];
      const v3854 = stdlib.eq(v3853, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
      const v3855 = v3854 ? false : true;
      stdlib.assert(v3855, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:334:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:331:28:application call to [unknown function] (defined at: ./index.rsh:331:28:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:331:28:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
        msg: 'Must have key info',
        who: 'deregister'
        });
      const v3871 = stdlib.add(v2030, stdlib.checkedBigNumberify('./index.rsh:336:9:decimal', stdlib.UInt_max, '1000'));
      ;
      switch (v3852[0]) {
        case 'None': {
          const v4016 = v3852[1];
          const v4017 = false;
          const v4018 = await txn1.getOutput('deregister', 'v4017', ctc11, v4017);
          if (v1393) {
            stdlib.protect(ctc0, await interact.out(v3837, v4018), {
              at: './index.rsh:331:11:application',
              fs: ['at ./index.rsh:331:11:application call to [unknown function] (defined at: ./index.rsh:331:11:function exp)', 'at ./index.rsh:347:16:application call to "k" (defined at: ./index.rsh:337:13:function exp)', 'at ./index.rsh:337:13:application call to [unknown function] (defined at: ./index.rsh:337:13:function exp)'],
              msg: 'out',
              who: 'deregister'
              });
            }
          else {
            }
          
          const v7803 = v2026;
          const v7805 = v3871;
          return;
          
          break;
          }
        case 'Some': {
          const v4026 = v3852[1];
          const v4027 = true;
          const v4028 = await txn1.getOutput('deregister', 'v4027', ctc11, v4027);
          if (v1393) {
            stdlib.protect(ctc0, await interact.out(v3837, v4028), {
              at: './index.rsh:331:11:application',
              fs: ['at ./index.rsh:331:11:application call to [unknown function] (defined at: ./index.rsh:331:11:function exp)', 'at ./index.rsh:341:16:application call to "k" (defined at: ./index.rsh:337:13:function exp)', 'at ./index.rsh:337:13:application call to [unknown function] (defined at: ./index.rsh:337:13:function exp)'],
              msg: 'out',
              who: 'deregister'
              });
            }
          else {
            }
          
          null;
          const v4042 = stdlib.sub(v3871, stdlib.checkedBigNumberify('./index.rsh:344:24:decimal', stdlib.UInt_max, '1000'));
          ;
          const v4047 = {
            keyInfo: v2024,
            manager: v3847,
            registered: false
            };
          const v7806 = v4047;
          const v7808 = v4042;
          return;
          
          break;
          }
        }
      break;
      }
    case 'grant0_273': {
      const v4143 = v2304[1];
      return;
      break;
      }
    case 'nop0_273': {
      const v4449 = v2304[1];
      return;
      break;
      }
    case 'register0_273': {
      const v4755 = v2304[1];
      return;
      break;
      }
    case 'touch0_273': {
      const v5061 = v2304[1];
      return;
      break;
      }
    }
  
  
  };
export async function _grant3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _grant3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _grant3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6,
    totalSupply: ctc1
    });
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc9 = stdlib.T_Struct([['votekey', ctc5], ['selkey', ctc5], ['spkey', ctc8], ['votefst', ctc4], ['votelst', ctc4], ['votekd', ctc4]]);
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc9
    });
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Object({
    keyInfo: ctc10,
    manager: ctc3,
    registered: ctc11
    });
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc17 = stdlib.T_Tuple([]);
  const ctc18 = stdlib.T_Tuple([ctc5, ctc5, ctc8, ctc4, ctc4, ctc4]);
  const ctc19 = stdlib.T_Data({
    arc200_approve0_273: ctc14,
    arc200_transfer0_273: ctc14,
    arc200_transferFrom0_273: ctc15,
    createAllowanceBox0_273: ctc16,
    createBalanceBox0_273: ctc13,
    deregister0_273: ctc17,
    grant0_273: ctc13,
    nop0_273: ctc17,
    register0_273: ctc18,
    touch0_273: ctc17
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2005, v2006, v2007, v2010, v2013, v2024, v2026, v2030] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc3, ctc7, ctc1, ctc4, ctc10, ctc12, ctc4]);
  const v2252 = ctc.selfAddress();
  const v2254 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:379:27:application call to [unknown function] (defined at: ./index.rsh:379:27:function exp)', 'at ./index.rsh:163:29:application call to "rungrant0_273" (defined at: ./index.rsh:379:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'in',
    who: 'grant'
    });
  const v2255 = v2254[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2257 = stdlib.addressEq(v2255, v2005);
  const v2258 = v2257 ? false : true;
  stdlib.assert(v2258, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:380:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:379:27:application call to [unknown function] (defined at: ./index.rsh:379:27:function exp)', 'at ./index.rsh:163:29:application call to "rungrant0_273" (defined at: ./index.rsh:379:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'ARC200: Grant zero address',
    who: 'grant'
    });
  const v2260 = v2026.manager;
  const v2261 = stdlib.addressEq(v2255, v2260);
  const v2262 = v2261 ? false : true;
  stdlib.assert(v2262, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:381:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:379:27:application call to [unknown function] (defined at: ./index.rsh:379:27:function exp)', 'at ./index.rsh:163:29:application call to "rungrant0_273" (defined at: ./index.rsh:379:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'ARC200: Grant to manager',
    who: 'grant'
    });
  const v2265 = stdlib.addressEq(v2252, v2260);
  stdlib.assert(v2265, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:382:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:379:27:application call to [unknown function] (defined at: ./index.rsh:379:27:function exp)', 'at ./index.rsh:163:29:application call to "rungrant0_273" (defined at: ./index.rsh:379:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'ARC200: Only manager can grant',
    who: 'grant'
    });
  const v2272 = ['grant0_273', v2254];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2005, v2006, v2007, v2010, v2013, v2024, v2026, v2030, v2272],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [stdlib.checkedBigNumberify('./index.rsh:379:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2304], secs: v2306, time: v2305, didSend: v1393, from: v2303 } = txn1;
      
      switch (v2304[0]) {
        case 'arc200_approve0_273': {
          const v2307 = v2304[1];
          
          break;
          }
        case 'arc200_transfer0_273': {
          const v2613 = v2304[1];
          
          break;
          }
        case 'arc200_transferFrom0_273': {
          const v2919 = v2304[1];
          
          break;
          }
        case 'createAllowanceBox0_273': {
          const v3225 = v2304[1];
          
          break;
          }
        case 'createBalanceBox0_273': {
          const v3531 = v2304[1];
          
          break;
          }
        case 'deregister0_273': {
          const v3837 = v2304[1];
          
          break;
          }
        case 'grant0_273': {
          const v4143 = v2304[1];
          sim_r.txns.push({
            kind: 'api',
            who: "grant"
            });
          ;
          const v4358 = v4143[stdlib.checkedBigNumberify('./index.rsh:379:10:spread', stdlib.UInt_max, '0')];
          const v4370 = null;
          const v4371 = await txn1.getOutput('grant', 'v4370', ctc0, v4370);
          
          const v4377 = v2026.keyInfo;
          const v4379 = v2026.registered;
          const v4380 = {
            keyInfo: v4377,
            manager: v4358,
            registered: v4379
            };
          const v7842 = v4380;
          const v7844 = v2030;
          sim_r.isHalt = false;
          
          break;
          }
        case 'nop0_273': {
          const v4449 = v2304[1];
          
          break;
          }
        case 'register0_273': {
          const v4755 = v2304[1];
          
          break;
          }
        case 'touch0_273': {
          const v5061 = v2304[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc7, ctc1, ctc4, ctc10, ctc12, ctc4, ctc19],
    waitIfNotPresent: false
    }));
  const {data: [v2304], secs: v2306, time: v2305, didSend: v1393, from: v2303 } = txn1;
  switch (v2304[0]) {
    case 'arc200_approve0_273': {
      const v2307 = v2304[1];
      return;
      break;
      }
    case 'arc200_transfer0_273': {
      const v2613 = v2304[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_273': {
      const v2919 = v2304[1];
      return;
      break;
      }
    case 'createAllowanceBox0_273': {
      const v3225 = v2304[1];
      return;
      break;
      }
    case 'createBalanceBox0_273': {
      const v3531 = v2304[1];
      return;
      break;
      }
    case 'deregister0_273': {
      const v3837 = v2304[1];
      return;
      break;
      }
    case 'grant0_273': {
      const v4143 = v2304[1];
      undefined /* setApiDetails */;
      ;
      const v4358 = v4143[stdlib.checkedBigNumberify('./index.rsh:379:10:spread', stdlib.UInt_max, '0')];
      const v4359 = stdlib.addressEq(v4358, v2005);
      const v4360 = v4359 ? false : true;
      stdlib.assert(v4360, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:380:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:384:13:application call to [unknown function] (defined at: ./index.rsh:384:13:function exp)'],
        msg: 'ARC200: Grant zero address',
        who: 'grant'
        });
      const v4362 = v2026.manager;
      const v4363 = stdlib.addressEq(v4358, v4362);
      const v4364 = v4363 ? false : true;
      stdlib.assert(v4364, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:381:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:384:13:application call to [unknown function] (defined at: ./index.rsh:384:13:function exp)'],
        msg: 'ARC200: Grant to manager',
        who: 'grant'
        });
      const v4367 = stdlib.addressEq(v2303, v4362);
      stdlib.assert(v4367, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:382:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:384:13:application call to [unknown function] (defined at: ./index.rsh:384:13:function exp)'],
        msg: 'ARC200: Only manager can grant',
        who: 'grant'
        });
      const v4370 = null;
      const v4371 = await txn1.getOutput('grant', 'v4370', ctc0, v4370);
      if (v1393) {
        stdlib.protect(ctc0, await interact.out(v4143, v4371), {
          at: './index.rsh:379:11:application',
          fs: ['at ./index.rsh:379:11:application call to [unknown function] (defined at: ./index.rsh:379:11:function exp)', 'at ./index.rsh:385:12:application call to "k" (defined at: ./index.rsh:384:13:function exp)', 'at ./index.rsh:384:13:application call to [unknown function] (defined at: ./index.rsh:384:13:function exp)'],
          msg: 'out',
          who: 'grant'
          });
        }
      else {
        }
      
      const v4377 = v2026.keyInfo;
      const v4379 = v2026.registered;
      const v4380 = {
        keyInfo: v4377,
        manager: v4358,
        registered: v4379
        };
      const v7842 = v4380;
      const v7844 = v2030;
      return;
      
      break;
      }
    case 'nop0_273': {
      const v4449 = v2304[1];
      return;
      break;
      }
    case 'register0_273': {
      const v4755 = v2304[1];
      return;
      break;
      }
    case 'touch0_273': {
      const v5061 = v2304[1];
      return;
      break;
      }
    }
  
  
  };
export async function _nop3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _nop3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _nop3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6,
    totalSupply: ctc1
    });
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc9 = stdlib.T_Struct([['votekey', ctc5], ['selkey', ctc5], ['spkey', ctc8], ['votefst', ctc4], ['votelst', ctc4], ['votekd', ctc4]]);
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc9
    });
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Object({
    keyInfo: ctc10,
    manager: ctc3,
    registered: ctc11
    });
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc3]);
  const ctc18 = stdlib.T_Tuple([ctc5, ctc5, ctc8, ctc4, ctc4, ctc4]);
  const ctc19 = stdlib.T_Data({
    arc200_approve0_273: ctc14,
    arc200_transfer0_273: ctc14,
    arc200_transferFrom0_273: ctc15,
    createAllowanceBox0_273: ctc16,
    createBalanceBox0_273: ctc17,
    deregister0_273: ctc13,
    grant0_273: ctc17,
    nop0_273: ctc13,
    register0_273: ctc18,
    touch0_273: ctc13
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2005, v2006, v2007, v2010, v2013, v2024, v2026, v2030] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc3, ctc7, ctc1, ctc4, ctc10, ctc12, ctc4]);
  const v2246 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:368:21:application call to [unknown function] (defined at: ./index.rsh:368:21:function exp)', 'at ./index.rsh:163:29:application call to "runnop0_273" (defined at: ./index.rsh:368:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'in',
    who: 'nop'
    });
  const v2250 = ['nop0_273', v2246];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2005, v2006, v2007, v2010, v2013, v2024, v2026, v2030, v2250],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [stdlib.checkedBigNumberify('./index.rsh:368:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2304], secs: v2306, time: v2305, didSend: v1393, from: v2303 } = txn1;
      
      switch (v2304[0]) {
        case 'arc200_approve0_273': {
          const v2307 = v2304[1];
          
          break;
          }
        case 'arc200_transfer0_273': {
          const v2613 = v2304[1];
          
          break;
          }
        case 'arc200_transferFrom0_273': {
          const v2919 = v2304[1];
          
          break;
          }
        case 'createAllowanceBox0_273': {
          const v3225 = v2304[1];
          
          break;
          }
        case 'createBalanceBox0_273': {
          const v3531 = v2304[1];
          
          break;
          }
        case 'deregister0_273': {
          const v3837 = v2304[1];
          
          break;
          }
        case 'grant0_273': {
          const v4143 = v2304[1];
          
          break;
          }
        case 'nop0_273': {
          const v4449 = v2304[1];
          sim_r.txns.push({
            kind: 'api',
            who: "nop"
            });
          ;
          const v4690 = null;
          const v4691 = await txn1.getOutput('nop', 'v4690', ctc0, v4690);
          
          const v7878 = v2026;
          const v7880 = v2030;
          sim_r.isHalt = false;
          
          break;
          }
        case 'register0_273': {
          const v4755 = v2304[1];
          
          break;
          }
        case 'touch0_273': {
          const v5061 = v2304[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc7, ctc1, ctc4, ctc10, ctc12, ctc4, ctc19],
    waitIfNotPresent: false
    }));
  const {data: [v2304], secs: v2306, time: v2305, didSend: v1393, from: v2303 } = txn1;
  switch (v2304[0]) {
    case 'arc200_approve0_273': {
      const v2307 = v2304[1];
      return;
      break;
      }
    case 'arc200_transfer0_273': {
      const v2613 = v2304[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_273': {
      const v2919 = v2304[1];
      return;
      break;
      }
    case 'createAllowanceBox0_273': {
      const v3225 = v2304[1];
      return;
      break;
      }
    case 'createBalanceBox0_273': {
      const v3531 = v2304[1];
      return;
      break;
      }
    case 'deregister0_273': {
      const v3837 = v2304[1];
      return;
      break;
      }
    case 'grant0_273': {
      const v4143 = v2304[1];
      return;
      break;
      }
    case 'nop0_273': {
      const v4449 = v2304[1];
      undefined /* setApiDetails */;
      ;
      const v4690 = null;
      const v4691 = await txn1.getOutput('nop', 'v4690', ctc0, v4690);
      if (v1393) {
        stdlib.protect(ctc0, await interact.out(v4449, v4691), {
          at: './index.rsh:368:11:application',
          fs: ['at ./index.rsh:368:11:application call to [unknown function] (defined at: ./index.rsh:368:11:function exp)', 'at ./index.rsh:371:12:application call to "k" (defined at: ./index.rsh:370:13:function exp)', 'at ./index.rsh:370:13:application call to [unknown function] (defined at: ./index.rsh:370:13:function exp)'],
          msg: 'out',
          who: 'nop'
          });
        }
      else {
        }
      
      const v7878 = v2026;
      const v7880 = v2030;
      return;
      
      break;
      }
    case 'register0_273': {
      const v4755 = v2304[1];
      return;
      break;
      }
    case 'touch0_273': {
      const v5061 = v2304[1];
      return;
      break;
      }
    }
  
  
  };
export async function _register3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _register3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _register3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6,
    totalSupply: ctc1
    });
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc9 = stdlib.T_Struct([['votekey', ctc5], ['selkey', ctc5], ['spkey', ctc8], ['votefst', ctc4], ['votelst', ctc4], ['votekd', ctc4]]);
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc9
    });
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Object({
    keyInfo: ctc10,
    manager: ctc3,
    registered: ctc11
    });
  const ctc13 = stdlib.T_Tuple([ctc5, ctc5, ctc8, ctc4, ctc4, ctc4]);
  const ctc14 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc3]);
  const ctc18 = stdlib.T_Tuple([]);
  const ctc19 = stdlib.T_Data({
    arc200_approve0_273: ctc14,
    arc200_transfer0_273: ctc14,
    arc200_transferFrom0_273: ctc15,
    createAllowanceBox0_273: ctc16,
    createBalanceBox0_273: ctc17,
    deregister0_273: ctc18,
    grant0_273: ctc17,
    nop0_273: ctc18,
    register0_273: ctc13,
    touch0_273: ctc18
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2005, v2006, v2007, v2010, v2013, v2024, v2026, v2030] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc3, ctc7, ctc1, ctc4, ctc10, ctc12, ctc4]);
  const v2183 = ctc.selfAddress();
  const v2185 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:302:74:application call to [unknown function] (defined at: ./index.rsh:302:74:function exp)', 'at ./index.rsh:163:29:application call to "runregister0_273" (defined at: ./index.rsh:302:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'in',
    who: 'register'
    });
  const v2198 = v2026.manager;
  const v2199 = stdlib.addressEq(v2183, v2198);
  stdlib.assert(v2199, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:303:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:302:74:application call to [unknown function] (defined at: ./index.rsh:302:74:function exp)', 'at ./index.rsh:163:29:application call to "runregister0_273" (defined at: ./index.rsh:302:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'ARC200: Only manager can grant',
    who: 'register'
    });
  const v2216 = ['register0_273', v2185];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2005, v2006, v2007, v2010, v2013, v2024, v2026, v2030, v2216],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [stdlib.checkedBigNumberify('./index.rsh:305:9:decimal', stdlib.UInt_max, '1000'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2304], secs: v2306, time: v2305, didSend: v1393, from: v2303 } = txn1;
      
      switch (v2304[0]) {
        case 'arc200_approve0_273': {
          const v2307 = v2304[1];
          
          break;
          }
        case 'arc200_transfer0_273': {
          const v2613 = v2304[1];
          
          break;
          }
        case 'arc200_transferFrom0_273': {
          const v2919 = v2304[1];
          
          break;
          }
        case 'createAllowanceBox0_273': {
          const v3225 = v2304[1];
          
          break;
          }
        case 'createBalanceBox0_273': {
          const v3531 = v2304[1];
          
          break;
          }
        case 'deregister0_273': {
          const v3837 = v2304[1];
          
          break;
          }
        case 'grant0_273': {
          const v4143 = v2304[1];
          
          break;
          }
        case 'nop0_273': {
          const v4449 = v2304[1];
          
          break;
          }
        case 'register0_273': {
          const v4755 = v2304[1];
          sim_r.txns.push({
            kind: 'api',
            who: "register"
            });
          const v4784 = v2026.manager;
          const v4789 = stdlib.add(v2030, stdlib.checkedBigNumberify('./index.rsh:305:9:decimal', stdlib.UInt_max, '1000'));
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:305:9:decimal', stdlib.UInt_max, '1000'),
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v5004 = v4755[stdlib.checkedBigNumberify('./index.rsh:302:10:spread', stdlib.UInt_max, '0')];
          const v5005 = v4755[stdlib.checkedBigNumberify('./index.rsh:302:10:spread', stdlib.UInt_max, '1')];
          const v5006 = v4755[stdlib.checkedBigNumberify('./index.rsh:302:10:spread', stdlib.UInt_max, '2')];
          const v5007 = v4755[stdlib.checkedBigNumberify('./index.rsh:302:10:spread', stdlib.UInt_max, '3')];
          const v5008 = v4755[stdlib.checkedBigNumberify('./index.rsh:302:10:spread', stdlib.UInt_max, '4')];
          const v5009 = v4755[stdlib.checkedBigNumberify('./index.rsh:302:10:spread', stdlib.UInt_max, '5')];
          const v5019 = true;
          const v5020 = await txn1.getOutput('register', 'v5019', ctc11, v5019);
          
          const v5031 = {
            selkey: v5005,
            spkey: v5006,
            votefst: v5007,
            votekd: v5009,
            votekey: v5004,
            votelst: v5008
            };
          null;
          null;
          null;
          null;
          null;
          null;
          null;
          const v5035 = stdlib.sub(v4789, stdlib.checkedBigNumberify('./index.rsh:324:20:decimal', stdlib.UInt_max, '1000'));
          sim_r.txns.push({
            kind: 'from',
            to: v2303,
            tok: undefined /* Nothing */
            });
          const v5040 = ['Some', v5031];
          const v5041 = {
            keyInfo: v5040,
            manager: v4784,
            registered: true
            };
          const v7914 = v5041;
          const v7916 = v5035;
          sim_r.isHalt = false;
          
          break;
          }
        case 'touch0_273': {
          const v5061 = v2304[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc7, ctc1, ctc4, ctc10, ctc12, ctc4, ctc19],
    waitIfNotPresent: false
    }));
  const {data: [v2304], secs: v2306, time: v2305, didSend: v1393, from: v2303 } = txn1;
  switch (v2304[0]) {
    case 'arc200_approve0_273': {
      const v2307 = v2304[1];
      return;
      break;
      }
    case 'arc200_transfer0_273': {
      const v2613 = v2304[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_273': {
      const v2919 = v2304[1];
      return;
      break;
      }
    case 'createAllowanceBox0_273': {
      const v3225 = v2304[1];
      return;
      break;
      }
    case 'createBalanceBox0_273': {
      const v3531 = v2304[1];
      return;
      break;
      }
    case 'deregister0_273': {
      const v3837 = v2304[1];
      return;
      break;
      }
    case 'grant0_273': {
      const v4143 = v2304[1];
      return;
      break;
      }
    case 'nop0_273': {
      const v4449 = v2304[1];
      return;
      break;
      }
    case 'register0_273': {
      const v4755 = v2304[1];
      undefined /* setApiDetails */;
      const v4784 = v2026.manager;
      const v4785 = stdlib.addressEq(v2303, v4784);
      stdlib.assert(v4785, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:303:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:302:74:application call to [unknown function] (defined at: ./index.rsh:302:74:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:302:74:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
        msg: 'ARC200: Only manager can grant',
        who: 'register'
        });
      const v4789 = stdlib.add(v2030, stdlib.checkedBigNumberify('./index.rsh:305:9:decimal', stdlib.UInt_max, '1000'));
      ;
      const v5004 = v4755[stdlib.checkedBigNumberify('./index.rsh:302:10:spread', stdlib.UInt_max, '0')];
      const v5005 = v4755[stdlib.checkedBigNumberify('./index.rsh:302:10:spread', stdlib.UInt_max, '1')];
      const v5006 = v4755[stdlib.checkedBigNumberify('./index.rsh:302:10:spread', stdlib.UInt_max, '2')];
      const v5007 = v4755[stdlib.checkedBigNumberify('./index.rsh:302:10:spread', stdlib.UInt_max, '3')];
      const v5008 = v4755[stdlib.checkedBigNumberify('./index.rsh:302:10:spread', stdlib.UInt_max, '4')];
      const v5009 = v4755[stdlib.checkedBigNumberify('./index.rsh:302:10:spread', stdlib.UInt_max, '5')];
      const v5019 = true;
      const v5020 = await txn1.getOutput('register', 'v5019', ctc11, v5019);
      if (v1393) {
        stdlib.protect(ctc0, await interact.out(v4755, v5020), {
          at: './index.rsh:302:11:application',
          fs: ['at ./index.rsh:302:11:application call to [unknown function] (defined at: ./index.rsh:302:11:function exp)', 'at ./index.rsh:307:12:application call to "k" (defined at: ./index.rsh:306:13:function exp)', 'at ./index.rsh:306:13:application call to [unknown function] (defined at: ./index.rsh:306:13:function exp)'],
          msg: 'out',
          who: 'register'
          });
        }
      else {
        }
      
      const v5031 = {
        selkey: v5005,
        spkey: v5006,
        votefst: v5007,
        votekd: v5009,
        votekey: v5004,
        votelst: v5008
        };
      null;
      null;
      null;
      null;
      null;
      null;
      null;
      const v5035 = stdlib.sub(v4789, stdlib.checkedBigNumberify('./index.rsh:324:20:decimal', stdlib.UInt_max, '1000'));
      ;
      const v5040 = ['Some', v5031];
      const v5041 = {
        keyInfo: v5040,
        manager: v4784,
        registered: true
        };
      const v7914 = v5041;
      const v7916 = v5035;
      return;
      
      break;
      }
    case 'touch0_273': {
      const v5061 = v2304[1];
      return;
      break;
      }
    }
  
  
  };
export async function _touch3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _touch3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _touch3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt256;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Object({
    decimals: ctc4,
    name: ctc5,
    symbol: ctc6,
    totalSupply: ctc1
    });
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc9 = stdlib.T_Struct([['votekey', ctc5], ['selkey', ctc5], ['spkey', ctc8], ['votefst', ctc4], ['votelst', ctc4], ['votekd', ctc4]]);
  const ctc10 = stdlib.T_Data({
    None: ctc0,
    Some: ctc9
    });
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Object({
    keyInfo: ctc10,
    manager: ctc3,
    registered: ctc11
    });
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc17 = stdlib.T_Tuple([ctc3]);
  const ctc18 = stdlib.T_Tuple([ctc5, ctc5, ctc8, ctc4, ctc4, ctc4]);
  const ctc19 = stdlib.T_Data({
    arc200_approve0_273: ctc14,
    arc200_transfer0_273: ctc14,
    arc200_transferFrom0_273: ctc15,
    createAllowanceBox0_273: ctc16,
    createBalanceBox0_273: ctc17,
    deregister0_273: ctc13,
    grant0_273: ctc17,
    nop0_273: ctc13,
    register0_273: ctc18,
    touch0_273: ctc13
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  
  const [v2005, v2006, v2007, v2010, v2013, v2024, v2026, v2030] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc3, ctc7, ctc1, ctc4, ctc10, ctc12, ctc4]);
  const v2238 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:356:23:application call to [unknown function] (defined at: ./index.rsh:356:23:function exp)', 'at ./index.rsh:163:29:application call to "runtouch0_273" (defined at: ./index.rsh:356:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'in',
    who: 'touch'
    });
  const v2242 = ['touch0_273', v2238];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2005, v2006, v2007, v2010, v2013, v2024, v2026, v2030, v2242],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [stdlib.checkedBigNumberify('./index.rsh:356:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2304], secs: v2306, time: v2305, didSend: v1393, from: v2303 } = txn1;
      
      switch (v2304[0]) {
        case 'arc200_approve0_273': {
          const v2307 = v2304[1];
          
          break;
          }
        case 'arc200_transfer0_273': {
          const v2613 = v2304[1];
          
          break;
          }
        case 'arc200_transferFrom0_273': {
          const v2919 = v2304[1];
          
          break;
          }
        case 'createAllowanceBox0_273': {
          const v3225 = v2304[1];
          
          break;
          }
        case 'createBalanceBox0_273': {
          const v3531 = v2304[1];
          
          break;
          }
        case 'deregister0_273': {
          const v3837 = v2304[1];
          
          break;
          }
        case 'grant0_273': {
          const v4143 = v2304[1];
          
          break;
          }
        case 'nop0_273': {
          const v4449 = v2304[1];
          
          break;
          }
        case 'register0_273': {
          const v4755 = v2304[1];
          
          break;
          }
        case 'touch0_273': {
          const v5061 = v2304[1];
          sim_r.txns.push({
            kind: 'api',
            who: "touch"
            });
          ;
          const v5354 = (stdlib.le(await ctc.getBalance(), v2030) ? stdlib.checkedBigNumberify('./index.rsh:359:39:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v2030));
          const v5355 = stdlib.safeAdd(v5354, v2030);
          const v5356 = v2026.manager;
          const v5360 = stdlib.sub(v5355, v5354);
          sim_r.txns.push({
            kind: 'from',
            to: v5356,
            tok: undefined /* Nothing */
            });
          const v5361 = await txn1.getOutput('touch', 'v5354', ctc4, v5354);
          
          const v7950 = v2026;
          const v7952 = v5360;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc7, ctc1, ctc4, ctc10, ctc12, ctc4, ctc19],
    waitIfNotPresent: false
    }));
  const {data: [v2304], secs: v2306, time: v2305, didSend: v1393, from: v2303 } = txn1;
  switch (v2304[0]) {
    case 'arc200_approve0_273': {
      const v2307 = v2304[1];
      return;
      break;
      }
    case 'arc200_transfer0_273': {
      const v2613 = v2304[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_273': {
      const v2919 = v2304[1];
      return;
      break;
      }
    case 'createAllowanceBox0_273': {
      const v3225 = v2304[1];
      return;
      break;
      }
    case 'createBalanceBox0_273': {
      const v3531 = v2304[1];
      return;
      break;
      }
    case 'deregister0_273': {
      const v3837 = v2304[1];
      return;
      break;
      }
    case 'grant0_273': {
      const v4143 = v2304[1];
      return;
      break;
      }
    case 'nop0_273': {
      const v4449 = v2304[1];
      return;
      break;
      }
    case 'register0_273': {
      const v4755 = v2304[1];
      return;
      break;
      }
    case 'touch0_273': {
      const v5061 = v2304[1];
      undefined /* setApiDetails */;
      ;
      const v5354 = (stdlib.le(await ctc.getBalance(), v2030) ? stdlib.checkedBigNumberify('./index.rsh:359:39:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v2030));
      const v5355 = stdlib.safeAdd(v5354, v2030);
      const v5356 = v2026.manager;
      const v5360 = stdlib.sub(v5355, v5354);
      ;
      const v5361 = await txn1.getOutput('touch', 'v5354', ctc4, v5354);
      if (v1393) {
        stdlib.protect(ctc0, await interact.out(v5061, v5361), {
          at: './index.rsh:356:11:application',
          fs: ['at ./index.rsh:356:11:application call to [unknown function] (defined at: ./index.rsh:356:11:function exp)', 'at ./index.rsh:361:12:application call to "k" (defined at: ./index.rsh:358:13:function exp)', 'at ./index.rsh:358:13:application call to [unknown function] (defined at: ./index.rsh:358:13:function exp)'],
          msg: 'out',
          who: 'touch'
          });
        }
      else {
        }
      
      const v7950 = v2026;
      const v7952 = v5360;
      return;
      
      break;
      }
    }
  
  
  };
export async function arc200_approve(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for arc200_approve expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for arc200_approve expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _arc200_approve3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function arc200_transfer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for arc200_transfer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for arc200_transfer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _arc200_transfer3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function arc200_transferFrom(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for arc200_transferFrom expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for arc200_transferFrom expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _arc200_transferFrom3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function createAllowanceBox(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for createAllowanceBox expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for createAllowanceBox expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _createAllowanceBox3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function createBalanceBox(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for createBalanceBox expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for createBalanceBox expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _createBalanceBox3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function deregister(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for deregister expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for deregister expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _deregister3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function grant(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for grant expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for grant expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _grant3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function nop(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for nop expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for nop expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _nop3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function register(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for register expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for register expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _register3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function touch(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for touch expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for touch expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _touch3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`_reachp_0((uint64,address,address,(uint64,byte[32],byte[8],uint256)))void`, `_reachp_2((uint64,(byte,byte[152])))void`, `arc200_approve(address,uint256)byte`, `arc200_transfer(address,uint256)byte`, `arc200_transferFrom(address,address,uint256)byte`, `createAllowanceBox(address,address)byte`, `createBalanceBox(address)byte`, `deregister()byte`, `grant(address)void`, `nop()void`, `register(byte[32],byte[32],byte[64],uint64,uint64,uint64)byte`, `touch()uint64`],
    pure: [`arc200_allowance(address,address)uint256`, `arc200_balanceOf(address)uint256`, `arc200_decimals()uint64`, `arc200_name()byte[32]`, `arc200_symbol()byte[8]`, `arc200_totalSupply()uint256`, `constructor()address`, `hasBox((byte,byte[64]))byte`, `manager()address`, `state()(address,byte,(byte,byte[152]))`, `supportsInterface(byte[4])byte`, `zeroAddress()address`],
    sigs: [`_reachp_0((uint64,address,address,(uint64,byte[32],byte[8],uint256)))void`, `_reachp_2((uint64,(byte,byte[152])))void`, `arc200_allowance(address,address)uint256`, `arc200_approve(address,uint256)byte`, `arc200_balanceOf(address)uint256`, `arc200_decimals()uint64`, `arc200_name()byte[32]`, `arc200_symbol()byte[8]`, `arc200_totalSupply()uint256`, `arc200_transfer(address,uint256)byte`, `arc200_transferFrom(address,address,uint256)byte`, `constructor()address`, `createAllowanceBox(address,address)byte`, `createBalanceBox(address)byte`, `deregister()byte`, `grant(address)void`, `hasBox((byte,byte[64]))byte`, `manager()address`, `nop()void`, `register(byte[32],byte[32],byte[64],uint64,uint64,uint64)byte`, `state()(address,byte,(byte,byte[152]))`, `supportsInterface(byte[4])byte`, `touch()uint64`, `zeroAddress()address`]
    },
  GlobalNumByteSlice: 6,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CSAKAAMB6AcI1N4BxNsBWHgCJgkBAAAIAAAAAAAAAAEBAQECAQMBBAR5g8NcBBlp+GUxGEEJ2ilkSSJbNQEhBFs1AihkK2RQJwRkUCcFZFAnBmRQghgEtUIhJQQtfXwqBDNujV8EPCpXoQRSHi1hBFNZxMUEWHWfogSE7BPVBGV9E+wEZdjoCQRnQ0AxBHn1sI0EguVzxASjWeR1BLauGiUEu7MZ8wTHpHf4BEqWj48E0lyQIgTXYQFSBNhR3icE7JlgQQTacCW5BPtutXM2GgCOGAk8CX8LCAkDCtAJnwqmCVEJVAmUCqMJlwlJCYwJVwkvCPEJXQrNCqkJfAlaCW8K2AA0C1cAIDUNNAtXICA1DDEANBYTRDQNNBYTRCEGKjEANA1QUAE0DIgLIicIMQBQNA1QNAxQsCQ1C4AIAAAAAAAACTI0CxZRBwhQsDQLgQeQFlEHCDUEMgY1DzQWNBVQNBRQNBNQNBIWUDQRUDQQUDQOFlAjMgY1AjUBKEsBVwB/ZytLAVd/f2cnBEsBV/5/ZycFSwGB/QKBf1hnJwZMgfwDgRdYZyk0ARY0AhZQZzEZIhJEiArWNANAAAqABBUffHU0BFCwJEM0C1cAIDUNNAtXICA1DDEANA0TRDIDKTIDKDEAUIgKWogKcEk1FzQMp0QkNQuACAAAAAAAAAp6NAsWUQcIULA0C4EHkBZRBwg1BCEFKDEAUDQXNAyhiApEiAoqIQUoNA1QMgMpMgMoNA1QiAoNiAojNAygiAomiAoMJwcxAFA0DVA0DFCwMgY1D0L/BzQLVwAgNRc0C1cgIDUNNAtXQCA1DDQXNA0TRDIDKTIDKDQXUIgJx4gJ3Uk1GTQMp0Q0FzEAUDUYMgMpMgMqNBhQAYgJqYgJv0k1CzQMp0QhBSg0F1A0GTQMoYgJs4gJmSEFKDQNUDIDKTIDKDQNUIgJfIgJkjQMoIgJlYgJeycHNBdQNA1QNAxQsDQLNAyhiAl+NQ0hBio0GFABNA2ICVknCDQXUDEAUDQNULAkNQuACAAAAAAAAAvhNAsWUQcIULA0C4EHkBZRBwg1BDIGNQ9C/jQ0C1cAIDQLVyAgUDUMKTIDKjQMUAGICQMiVSISRCEGKjQMUAEyA4gI/SQ1C4AIAAAAAAAADSg0CxZRBwhQsDQLFlEHCDUEMgY1D0L95zQNVwEgNQspMgMoNAtQiAi9IlUiEkQhBSg0C1AyA4gIuCQ1C4AIAAAAAAAADmo0CxZRBwhQsDQLFlEHCDUEMgY1D0L9ojQQV5kgNRcxADQXEkQ0EFe5ARdENBBXAJlJNQsiVUQ0DiUINQ0liAiQiAi6NAsiVY0CBvoHIkL9DzQNVwEgSTULNBYTRDQQV5kgNQw0CzQME0QxADQMEkQpNQyACAAAAAAAABESNAxQsDQMNQQ0EFcAmTQLUDQQV7kBUDIGNQ81EEL9Hik1C4AIAAAAAAAAElI0C1CwNAs1BDIGNQ9C/QI0EFeZIDUbMQA0GxJEJYgICDQLVwAgNRo0C1cgIDUZNAtXQEA1GDQLgYABWzUXNAuBiAFbNQ00C4GQAVs1DCQ1C4AIAAAAAAAAE5s0CxZRBwhQsDQLFlEHCDUENBo0GVA0GFA0FxZQNA0WUDQMFlA1C4AENXZsETQLULCABMU9sC40GlCwgASFHshhNBlQsIAEJ8cM7jQYULCABHBzUdA0FxZQsIAEwsceCDQNFlCwgAQpdSfsNAwWULAlMQCIB1WIB40rNAtQNBtQK1AyBjQOJQglCTUONQ81EEL8JTIKYDIKeAk0DglJNQs0EFeZIIgHI4AIAAAAAAAAFOo0CxZQsDQLFjUEMgY0CzQOCDQLCTUONQ9C++s0ASMSRIgGlDIDKTIDKjQMNAtQUAGIBrqIBtA1BDEZIhJEQvwnIQSvKDQMNAtQUCEHr1BQNQsjNAESRIgGXjQLIls1DDQLVwiZNQ2ABHfKP6Q0DBZQNA1QsDQMiAa1NA0iVY0KBMAEygTUBN4E6ATrBO4E8QT0BP5C+xY0ASMSRIgGGTIDKTIDKDQLUIgGQ4gGWTUEQv+GNAEjEkSIBf00EhZXBwA1BEL/czQBIxJEiAXqNBRXCCA1BEL/YTQBIxJEiAXYNBRXKAg1BEL/TzQBIxJEiAXGNBM1BEL/QCEErys0DDQLUFAhB69QUDULQv9FIQSvJwQ0DTQMUDQLUFCBOK9QUDULQv8tNAEjEkSIBYs0FTUEQv8FIQSvJwU0DDQLUFAhB69QUDULQv8JIQSvJwY0C1AhCK9QUDULQv73gKEBAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1C0L+TiEEr4ABBjQLUCEIr1BQNQtC/js0ASMSRIgEmTQLSTUMIlWNAgP3BA5C+X40ASMSRIgEgTQQV5kgNQRC/fiAoQEAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADULQv1oIQSvgAEINBA0D1A0DlA0DRZQNAwWUDQLFlBQUDULQv1HNAEjEkSIA6U0EFeZIDQQV7kBUDQQVwCZUDUEQv0QNAEjEkSIA4eAIOhHJSwrFSuRyyUA7tHv3RW6kGAgxGcEe6/FMsZo8y2ANAsBEhZRBwg1BEL82YChAQAAAAAAAAAACQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQtC/Ek0ASMSRIgCpzQWNQRC/CE0CyJbNQw0C1cIIDUWNAtXKCA1FTQLV0hQNRSABJvLfD80DBZQNBZQNBVQNBRQsDQMiALjNBRXMCBJNRMyA6VENBQiW0k1EoGAAg5EIQUoNBVQNBOIAoohBSg0FlAyA4gCfycHNBZQNBVQNBNQsIGZAa9JNRE0FVAoUDIGIjUONQ81EEL3aYgCioGgjQaIAp02GgE1C0L/aIgCeDYaATULQvuXIjE0EkSBBjE1EkQiMTYSRCIxNxJEiAJYgZMEryIiQvdHNhoBNhoCNQs1DEL7MzYaATYaAjULNQxC+0s2GgE1C0L7mUL7skL7wkL70UL74DYaATYaAjYaAzULNQw1DUL78TYaATYaAjULNQxC+9BC+/k2GgE2GgI1CzUMQvv7NhoBNQtC/AhC/Bc2GgE1C0L8uDYaATULQvzDNA1XAUA1C0L2UDQNVwFANQtC9ww0DVcBYDULQveONA1XAUA1C0L4V0L4oUL440L5GUL5YTQNVwGYNQtC+XNC+k0iNQuACAAAAAAAAA+xNAsWUQcIULA0CxZRBwg1BDIGNA01DjUPQvZKNAtXAZg1DCQ1C4AIAAAAAAAAD7s0CxZRBwhQsDQLFlEHCDUEgATW1mBMNAxQsCUxAIgBKTQRNBdQKFAyBjQNJQk1DjUPNRBC9gBITL9IiSKyASSyELIHsgiziTQLFlEHCDUEQvoWKTIDKjQMVwFAUAGIAL0iVSQSNQtC/94pMgMoNAxXASBQiACnIlUkEjULQv/IQvvcQvvrNhoBNhoCNhoDNhoEFzYaBRc2GgYXNQs1DDUNNQ41DzUQQvxwQvyONhoBNQtC/KRC/NhIiUwJSTUGMgmIAIaJCUlB/+5JNQaIAH6JMRmBBRJEiACPIjIKMgmIAMVC9a5C/VFJVwAgNRZJVyAgNRVJV0BQNRRJV5AgNRNJgbABWzUSSVe4mTURSYHRAoG6AVg1EIGLBFs1Dom+SRZRBwhFBE1QiUxJvUD/CEsDiABBQv8ASVcBAEwiVU2JSRWBIEwJr0xQibFC/u4xFjQAJAhJNQAJRwKJJDUDiUkiEkw0AhIRRIk0BjQHSg9B/0hC/1A0Bgg1BomxIQmyECKyAbOJsSEJshA0GbILNBqyCjQYsj80F7IMNA2yDTQMsg4lsgGzibGyCUL+jw==`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `30`,
    1000: `519`,
    1001: `519`,
    1002: `520`,
    1003: `520`,
    1004: `520`,
    1005: `521`,
    1006: `522`,
    1007: `522`,
    1008: `523`,
    1009: `523`,
    101: `30`,
    1010: `524`,
    1011: `525`,
    1012: `530`,
    1013: `530`,
    1014: `531`,
    1015: `531`,
    1016: `531`,
    1017: `532`,
    1018: `532`,
    1019: `533`,
    102: `30`,
    1020: `533`,
    1021: `534`,
    1022: `534`,
    1023: `535`,
    1024: `536`,
    1025: `541`,
    1026: `541`,
    1027: `542`,
    1028: `542`,
    1029: `543`,
    103: `30`,
    1030: `544`,
    1031: `549`,
    1032: `550`,
    1033: `550`,
    1034: `551`,
    1035: `551`,
    1036: `551`,
    1037: `551`,
    1038: `551`,
    1039: `551`,
    104: `30`,
    1040: `551`,
    1041: `551`,
    1042: `551`,
    1043: `551`,
    1044: `552`,
    1045: `552`,
    1046: `553`,
    1047: `554`,
    1048: `555`,
    1049: `555`,
    105: `30`,
    1050: `556`,
    1051: `556`,
    1052: `557`,
    1053: `557`,
    1054: `558`,
    1055: `558`,
    1056: `558`,
    1057: `559`,
    1058: `559`,
    1059: `560`,
    106: `30`,
    1060: `561`,
    1061: `561`,
    1062: `562`,
    1063: `562`,
    1064: `562`,
    1065: `563`,
    1066: `564`,
    1067: `564`,
    1068: `565`,
    1069: `565`,
    107: `30`,
    1070: `566`,
    1071: `566`,
    1072: `567`,
    1073: `567`,
    1074: `567`,
    1075: `569`,
    1076: `570`,
    1077: `570`,
    1078: `571`,
    1079: `571`,
    108: `30`,
    1080: `571`,
    1081: `571`,
    1082: `571`,
    1083: `571`,
    1084: `571`,
    1085: `571`,
    1086: `571`,
    1087: `571`,
    1088: `572`,
    1089: `572`,
    109: `30`,
    1090: `573`,
    1091: `574`,
    1092: `575`,
    1093: `575`,
    1094: `576`,
    1095: `576`,
    1096: `577`,
    1097: `577`,
    1098: `578`,
    1099: `578`,
    11: `2`,
    110: `30`,
    1100: `579`,
    1101: `579`,
    1102: `579`,
    1103: `581`,
    1104: `581`,
    1105: `582`,
    1106: `582`,
    1107: `582`,
    1108: `583`,
    1109: `583`,
    111: `30`,
    1110: `584`,
    1111: `584`,
    1112: `585`,
    1113: `585`,
    1114: `586`,
    1115: `587`,
    1116: `594`,
    1117: `594`,
    1118: `595`,
    1119: `595`,
    112: `30`,
    1120: `595`,
    1121: `598`,
    1122: `598`,
    1123: `599`,
    1124: `599`,
    1125: `599`,
    1126: `600`,
    1127: `600`,
    1128: `601`,
    1129: `601`,
    113: `30`,
    1130: `602`,
    1131: `602`,
    1132: `602`,
    1133: `603`,
    1134: `603`,
    1135: `604`,
    1136: `604`,
    1137: `605`,
    1138: `605`,
    1139: `605`,
    114: `30`,
    1140: `606`,
    1141: `606`,
    1142: `607`,
    1143: `607`,
    1144: `608`,
    1145: `608`,
    1146: `608`,
    1147: `609`,
    1148: `610`,
    1149: `610`,
    115: `30`,
    1150: `611`,
    1151: `611`,
    1152: `612`,
    1153: `612`,
    1154: `612`,
    1155: `613`,
    1156: `614`,
    1157: `614`,
    1158: `615`,
    1159: `615`,
    116: `30`,
    1160: `616`,
    1161: `616`,
    1162: `616`,
    1163: `617`,
    1164: `618`,
    1165: `618`,
    1166: `619`,
    1167: `620`,
    1168: `620`,
    1169: `621`,
    117: `30`,
    1170: `621`,
    1171: `621`,
    1172: `621`,
    1173: `621`,
    1174: `621`,
    1175: `621`,
    1176: `621`,
    1177: `621`,
    1178: `621`,
    1179: `622`,
    118: `30`,
    1180: `622`,
    1181: `623`,
    1182: `624`,
    1183: `624`,
    1184: `624`,
    1185: `625`,
    1186: `626`,
    1187: `627`,
    1188: `627`,
    1189: `628`,
    119: `30`,
    1190: `629`,
    1191: `629`,
    1192: `629`,
    1193: `630`,
    1194: `630`,
    1195: `631`,
    1196: `631`,
    1197: `632`,
    1198: `632`,
    1199: `633`,
    12: `2`,
    120: `30`,
    1200: `634`,
    1201: `634`,
    1202: `635`,
    1203: `636`,
    1204: `636`,
    1205: `637`,
    1206: `638`,
    1207: `639`,
    1208: `639`,
    1209: `640`,
    121: `30`,
    1210: `641`,
    1211: `642`,
    1212: `642`,
    1213: `643`,
    1214: `644`,
    1215: `645`,
    1216: `645`,
    1217: `646`,
    1218: `646`,
    1219: `646`,
    122: `30`,
    1220: `646`,
    1221: `646`,
    1222: `646`,
    1223: `647`,
    1224: `647`,
    1225: `648`,
    1226: `649`,
    1227: `651`,
    1228: `651`,
    1229: `651`,
    123: `30`,
    1230: `651`,
    1231: `651`,
    1232: `651`,
    1233: `652`,
    1234: `652`,
    1235: `653`,
    1236: `654`,
    1237: `656`,
    1238: `656`,
    1239: `656`,
    124: `30`,
    1240: `656`,
    1241: `656`,
    1242: `656`,
    1243: `657`,
    1244: `657`,
    1245: `658`,
    1246: `659`,
    1247: `661`,
    1248: `661`,
    1249: `661`,
    125: `30`,
    1250: `661`,
    1251: `661`,
    1252: `661`,
    1253: `662`,
    1254: `662`,
    1255: `663`,
    1256: `664`,
    1257: `666`,
    1258: `666`,
    1259: `666`,
    126: `30`,
    1260: `666`,
    1261: `666`,
    1262: `666`,
    1263: `667`,
    1264: `667`,
    1265: `668`,
    1266: `669`,
    1267: `670`,
    1268: `672`,
    1269: `672`,
    127: `30`,
    1270: `672`,
    1271: `672`,
    1272: `672`,
    1273: `672`,
    1274: `673`,
    1275: `673`,
    1276: `674`,
    1277: `675`,
    1278: `676`,
    1279: `678`,
    128: `30`,
    1280: `678`,
    1281: `678`,
    1282: `678`,
    1283: `678`,
    1284: `678`,
    1285: `679`,
    1286: `679`,
    1287: `680`,
    1288: `681`,
    1289: `682`,
    129: `30`,
    1290: `684`,
    1291: `684`,
    1292: `685`,
    1293: `685`,
    1294: `686`,
    1295: `686`,
    1296: `686`,
    1297: `687`,
    1298: `688`,
    1299: `688`,
    13: `2`,
    130: `30`,
    1300: `689`,
    1301: `690`,
    1302: `690`,
    1303: `691`,
    1304: `692`,
    1305: `693`,
    1306: `694`,
    1307: `694`,
    1308: `695`,
    1309: `695`,
    131: `30`,
    1310: `696`,
    1311: `696`,
    1312: `697`,
    1313: `698`,
    1314: `698`,
    1315: `699`,
    1316: `700`,
    1317: `700`,
    1318: `701`,
    1319: `701`,
    132: `30`,
    1320: `702`,
    1321: `702`,
    1322: `703`,
    1323: `703`,
    1324: `703`,
    1325: `705`,
    1326: `705`,
    1327: `706`,
    1328: `707`,
    1329: `707`,
    133: `30`,
    1330: `708`,
    1331: `709`,
    1332: `710`,
    1333: `710`,
    1334: `711`,
    1335: `713`,
    1336: `714`,
    1337: `714`,
    1338: `716`,
    1339: `716`,
    134: `30`,
    1340: `717`,
    1341: `717`,
    1342: `717`,
    1343: `718`,
    1344: `718`,
    1345: `718`,
    1346: `719`,
    1347: `719`,
    1348: `719`,
    1349: `719`,
    135: `30`,
    1350: `719`,
    1351: `719`,
    1352: `719`,
    1353: `719`,
    1354: `719`,
    1355: `719`,
    1356: `720`,
    1357: `720`,
    1358: `721`,
    1359: `722`,
    136: `30`,
    1360: `723`,
    1361: `724`,
    1362: `724`,
    1363: `725`,
    1364: `726`,
    1365: `726`,
    1366: `727`,
    1367: `727`,
    1368: `728`,
    1369: `728`,
    137: `30`,
    1370: `729`,
    1371: `729`,
    1372: `730`,
    1373: `731`,
    1374: `731`,
    1375: `732`,
    1376: `733`,
    1377: `733`,
    1378: `734`,
    1379: `734`,
    138: `30`,
    1380: `735`,
    1381: `735`,
    1382: `735`,
    1383: `737`,
    1384: `737`,
    1385: `738`,
    1386: `739`,
    1387: `740`,
    1388: `743`,
    1389: `743`,
    139: `30`,
    1390: `743`,
    1391: `744`,
    1392: `744`,
    1393: `746`,
    1394: `747`,
    1395: `747`,
    1396: `748`,
    1397: `749`,
    1398: `749`,
    1399: `750`,
    14: `2`,
    140: `30`,
    1400: `750`,
    1401: `751`,
    1402: `752`,
    1403: `753`,
    1404: `754`,
    1405: `754`,
    1406: `754`,
    1407: `755`,
    1408: `755`,
    1409: `755`,
    141: `30`,
    1410: `756`,
    1411: `756`,
    1412: `758`,
    1413: `758`,
    1414: `759`,
    1415: `760`,
    1416: `761`,
    1417: `763`,
    1418: `763`,
    1419: `763`,
    142: `30`,
    1420: `765`,
    1421: `766`,
    1422: `767`,
    1423: `768`,
    1424: `768`,
    1425: `769`,
    1426: `769`,
    1427: `770`,
    1428: `771`,
    1429: `772`,
    143: `30`,
    1430: `772`,
    1431: `773`,
    1432: `774`,
    1433: `775`,
    1434: `776`,
    1435: `776`,
    1436: `778`,
    1437: `779`,
    1438: `779`,
    1439: `780`,
    144: `30`,
    1440: `781`,
    1441: `782`,
    1442: `782`,
    1443: `782`,
    1444: `783`,
    1445: `783`,
    1446: `784`,
    1447: `785`,
    1448: `786`,
    1449: `786`,
    145: `30`,
    1450: `787`,
    1451: `787`,
    1452: `788`,
    1453: `788`,
    1454: `788`,
    1455: `789`,
    1456: `789`,
    1457: `790`,
    1458: `790`,
    1459: `790`,
    146: `30`,
    1460: `790`,
    1461: `790`,
    1462: `790`,
    1463: `791`,
    1464: `791`,
    1465: `792`,
    1466: `793`,
    1467: `794`,
    1468: `794`,
    1469: `795`,
    147: `30`,
    1470: `796`,
    1471: `798`,
    1472: `798`,
    1473: `799`,
    1474: `799`,
    1475: `799`,
    1476: `800`,
    1477: `800`,
    1478: `801`,
    1479: `802`,
    148: `30`,
    1480: `803`,
    1481: `803`,
    1482: `803`,
    1483: `803`,
    1484: `803`,
    1485: `803`,
    1486: `803`,
    1487: `803`,
    1488: `803`,
    1489: `803`,
    149: `30`,
    1490: `803`,
    1491: `803`,
    1492: `803`,
    1493: `803`,
    1494: `803`,
    1495: `803`,
    1496: `803`,
    1497: `803`,
    1498: `803`,
    1499: `803`,
    15: `2`,
    150: `30`,
    1500: `803`,
    1501: `803`,
    1502: `804`,
    1503: `804`,
    1504: `804`,
    1505: `806`,
    1506: `806`,
    1507: `807`,
    1508: `808`,
    1509: `809`,
    151: `30`,
    1510: `812`,
    1511: `812`,
    1512: `812`,
    1513: `813`,
    1514: `813`,
    1515: `815`,
    1516: `816`,
    1517: `816`,
    1518: `817`,
    1519: `818`,
    152: `30`,
    1520: `818`,
    1521: `819`,
    1522: `820`,
    1523: `820`,
    1524: `820`,
    1525: `821`,
    1526: `821`,
    1527: `821`,
    1528: `822`,
    1529: `822`,
    153: `30`,
    1530: `823`,
    1531: `823`,
    1532: `823`,
    1533: `825`,
    1534: `825`,
    1535: `826`,
    1536: `827`,
    1537: `828`,
    1538: `831`,
    1539: `831`,
    154: `30`,
    1540: `831`,
    1541: `832`,
    1542: `832`,
    1543: `833`,
    1544: `834`,
    1545: `834`,
    1546: `835`,
    1547: `835`,
    1548: `835`,
    1549: `837`,
    155: `30`,
    1550: `837`,
    1551: `838`,
    1552: `839`,
    1553: `840`,
    1554: `843`,
    1555: `843`,
    1556: `843`,
    1557: `844`,
    1558: `844`,
    1559: `845`,
    156: `30`,
    1560: `845`,
    1561: `845`,
    1562: `846`,
    1563: `846`,
    1564: `847`,
    1565: `847`,
    1566: `847`,
    1567: `849`,
    1568: `849`,
    1569: `850`,
    157: `30`,
    1570: `851`,
    1571: `852`,
    1572: `855`,
    1573: `855`,
    1574: `855`,
    1575: `856`,
    1576: `856`,
    1577: `857`,
    1578: `857`,
    1579: `857`,
    158: `30`,
    1580: `858`,
    1581: `858`,
    1582: `859`,
    1583: `859`,
    1584: `859`,
    1585: `861`,
    1586: `861`,
    1587: `862`,
    1588: `863`,
    1589: `864`,
    159: `30`,
    1590: `867`,
    1591: `867`,
    1592: `867`,
    1593: `868`,
    1594: `868`,
    1595: `869`,
    1596: `869`,
    1597: `870`,
    1598: `870`,
    1599: `870`,
    16: `2`,
    160: `30`,
    1600: `872`,
    1601: `873`,
    1602: `874`,
    1603: `875`,
    1604: `875`,
    1605: `876`,
    1606: `876`,
    1607: `877`,
    1608: `878`,
    1609: `879`,
    161: `30`,
    1610: `879`,
    1611: `880`,
    1612: `881`,
    1613: `882`,
    1614: `883`,
    1615: `883`,
    1616: `884`,
    1617: `884`,
    1618: `884`,
    1619: `886`,
    162: `30`,
    1620: `887`,
    1621: `888`,
    1622: `888`,
    1623: `889`,
    1624: `889`,
    1625: `890`,
    1626: `890`,
    1627: `891`,
    1628: `892`,
    1629: `892`,
    163: `30`,
    1630: `893`,
    1631: `894`,
    1632: `895`,
    1633: `895`,
    1634: `896`,
    1635: `897`,
    1636: `898`,
    1637: `899`,
    1638: `899`,
    1639: `900`,
    164: `30`,
    1640: `900`,
    1641: `900`,
    1642: `902`,
    1643: `902`,
    1644: `903`,
    1645: `904`,
    1646: `905`,
    1647: `908`,
    1648: `908`,
    1649: `908`,
    165: `30`,
    1650: `909`,
    1651: `909`,
    1652: `910`,
    1653: `910`,
    1654: `911`,
    1655: `911`,
    1656: `911`,
    1657: `913`,
    1658: `914`,
    1659: `915`,
    166: `30`,
    1660: `915`,
    1661: `916`,
    1662: `916`,
    1663: `917`,
    1664: `917`,
    1665: `918`,
    1666: `919`,
    1667: `920`,
    1668: `920`,
    1669: `921`,
    167: `30`,
    1670: `922`,
    1671: `923`,
    1672: `924`,
    1673: `924`,
    1674: `925`,
    1675: `925`,
    1676: `925`,
    1677: `927`,
    1678: `928`,
    1679: `929`,
    168: `30`,
    1680: `929`,
    1681: `930`,
    1682: `930`,
    1683: `931`,
    1684: `932`,
    1685: `932`,
    1686: `933`,
    1687: `934`,
    1688: `935`,
    1689: `936`,
    169: `30`,
    1690: `936`,
    1691: `937`,
    1692: `937`,
    1693: `937`,
    1694: `939`,
    1695: `939`,
    1696: `939`,
    1697: `939`,
    1698: `939`,
    1699: `939`,
    17: `2`,
    170: `30`,
    1700: `939`,
    1701: `939`,
    1702: `939`,
    1703: `939`,
    1704: `939`,
    1705: `939`,
    1706: `939`,
    1707: `939`,
    1708: `939`,
    1709: `939`,
    171: `30`,
    1710: `939`,
    1711: `939`,
    1712: `939`,
    1713: `939`,
    1714: `939`,
    1715: `939`,
    1716: `939`,
    1717: `939`,
    1718: `939`,
    1719: `939`,
    172: `30`,
    1720: `939`,
    1721: `939`,
    1722: `939`,
    1723: `939`,
    1724: `939`,
    1725: `939`,
    1726: `939`,
    1727: `939`,
    1728: `939`,
    1729: `939`,
    173: `30`,
    1730: `939`,
    1731: `939`,
    1732: `939`,
    1733: `939`,
    1734: `939`,
    1735: `939`,
    1736: `939`,
    1737: `939`,
    1738: `939`,
    1739: `939`,
    174: `30`,
    1740: `939`,
    1741: `939`,
    1742: `939`,
    1743: `939`,
    1744: `939`,
    1745: `939`,
    1746: `939`,
    1747: `939`,
    1748: `939`,
    1749: `939`,
    175: `30`,
    1750: `939`,
    1751: `939`,
    1752: `939`,
    1753: `939`,
    1754: `939`,
    1755: `939`,
    1756: `939`,
    1757: `939`,
    1758: `939`,
    1759: `939`,
    176: `30`,
    1760: `939`,
    1761: `939`,
    1762: `939`,
    1763: `939`,
    1764: `939`,
    1765: `939`,
    1766: `939`,
    1767: `939`,
    1768: `939`,
    1769: `939`,
    177: `30`,
    1770: `939`,
    1771: `939`,
    1772: `939`,
    1773: `939`,
    1774: `939`,
    1775: `939`,
    1776: `939`,
    1777: `939`,
    1778: `939`,
    1779: `939`,
    178: `30`,
    1780: `939`,
    1781: `939`,
    1782: `939`,
    1783: `939`,
    1784: `939`,
    1785: `939`,
    1786: `939`,
    1787: `939`,
    1788: `939`,
    1789: `939`,
    179: `30`,
    1790: `939`,
    1791: `939`,
    1792: `939`,
    1793: `939`,
    1794: `939`,
    1795: `939`,
    1796: `939`,
    1797: `939`,
    1798: `939`,
    1799: `939`,
    18: `2`,
    180: `30`,
    1800: `939`,
    1801: `939`,
    1802: `939`,
    1803: `939`,
    1804: `939`,
    1805: `939`,
    1806: `939`,
    1807: `939`,
    1808: `939`,
    1809: `939`,
    181: `30`,
    1810: `939`,
    1811: `939`,
    1812: `939`,
    1813: `939`,
    1814: `939`,
    1815: `939`,
    1816: `939`,
    1817: `939`,
    1818: `939`,
    1819: `939`,
    182: `30`,
    1820: `939`,
    1821: `939`,
    1822: `939`,
    1823: `939`,
    1824: `939`,
    1825: `939`,
    1826: `939`,
    1827: `939`,
    1828: `939`,
    1829: `939`,
    183: `30`,
    1830: `939`,
    1831: `939`,
    1832: `939`,
    1833: `939`,
    1834: `939`,
    1835: `939`,
    1836: `939`,
    1837: `939`,
    1838: `939`,
    1839: `939`,
    184: `30`,
    1840: `939`,
    1841: `939`,
    1842: `939`,
    1843: `939`,
    1844: `939`,
    1845: `939`,
    1846: `939`,
    1847: `939`,
    1848: `939`,
    1849: `939`,
    185: `30`,
    1850: `939`,
    1851: `939`,
    1852: `939`,
    1853: `939`,
    1854: `939`,
    1855: `939`,
    1856: `939`,
    1857: `939`,
    1858: `940`,
    1859: `940`,
    186: `30`,
    1860: `941`,
    1861: `941`,
    1862: `941`,
    1863: `943`,
    1864: `944`,
    1865: `945`,
    1866: `945`,
    1867: `945`,
    1868: `946`,
    1869: `946`,
    187: `30`,
    1870: `947`,
    1871: `948`,
    1872: `948`,
    1873: `949`,
    1874: `950`,
    1875: `951`,
    1876: `952`,
    1877: `952`,
    1878: `953`,
    1879: `953`,
    188: `30`,
    1880: `953`,
    1881: `955`,
    1882: `955`,
    1883: `956`,
    1884: `957`,
    1885: `958`,
    1886: `961`,
    1887: `961`,
    1888: `961`,
    1889: `962`,
    189: `30`,
    1890: `962`,
    1891: `963`,
    1892: `964`,
    1893: `964`,
    1894: `965`,
    1895: `966`,
    1896: `967`,
    1897: `967`,
    1898: `967`,
    1899: `967`,
    19: `2`,
    190: `30`,
    1900: `967`,
    1901: `967`,
    1902: `968`,
    1903: `968`,
    1904: `968`,
    1905: `970`,
    1906: `970`,
    1907: `971`,
    1908: `972`,
    1909: `973`,
    191: `30`,
    1910: `976`,
    1911: `976`,
    1912: `976`,
    1913: `977`,
    1914: `977`,
    1915: `978`,
    1916: `978`,
    1917: `978`,
    1918: `979`,
    1919: `979`,
    192: `30`,
    1920: `980`,
    1921: `980`,
    1922: `980`,
    1923: `982`,
    1924: `982`,
    1925: `982`,
    1926: `982`,
    1927: `982`,
    1928: `982`,
    1929: `982`,
    193: `30`,
    1930: `982`,
    1931: `982`,
    1932: `982`,
    1933: `982`,
    1934: `982`,
    1935: `982`,
    1936: `982`,
    1937: `982`,
    1938: `982`,
    1939: `982`,
    194: `30`,
    1940: `982`,
    1941: `982`,
    1942: `982`,
    1943: `982`,
    1944: `982`,
    1945: `982`,
    1946: `982`,
    1947: `982`,
    1948: `982`,
    1949: `982`,
    195: `30`,
    1950: `982`,
    1951: `982`,
    1952: `982`,
    1953: `982`,
    1954: `982`,
    1955: `982`,
    1956: `982`,
    1957: `982`,
    1958: `982`,
    1959: `982`,
    196: `30`,
    1960: `982`,
    1961: `982`,
    1962: `982`,
    1963: `982`,
    1964: `982`,
    1965: `982`,
    1966: `982`,
    1967: `982`,
    1968: `982`,
    1969: `982`,
    197: `30`,
    1970: `982`,
    1971: `982`,
    1972: `982`,
    1973: `982`,
    1974: `982`,
    1975: `982`,
    1976: `982`,
    1977: `982`,
    1978: `982`,
    1979: `982`,
    198: `30`,
    1980: `982`,
    1981: `982`,
    1982: `982`,
    1983: `982`,
    1984: `982`,
    1985: `982`,
    1986: `982`,
    1987: `982`,
    1988: `982`,
    1989: `982`,
    199: `30`,
    1990: `982`,
    1991: `982`,
    1992: `982`,
    1993: `982`,
    1994: `982`,
    1995: `982`,
    1996: `982`,
    1997: `982`,
    1998: `982`,
    1999: `982`,
    2: `2`,
    20: `2`,
    200: `30`,
    2000: `982`,
    2001: `982`,
    2002: `982`,
    2003: `982`,
    2004: `982`,
    2005: `982`,
    2006: `982`,
    2007: `982`,
    2008: `982`,
    2009: `982`,
    201: `30`,
    2010: `982`,
    2011: `982`,
    2012: `982`,
    2013: `982`,
    2014: `982`,
    2015: `982`,
    2016: `982`,
    2017: `982`,
    2018: `982`,
    2019: `982`,
    202: `30`,
    2020: `982`,
    2021: `982`,
    2022: `982`,
    2023: `982`,
    2024: `982`,
    2025: `982`,
    2026: `982`,
    2027: `982`,
    2028: `982`,
    2029: `982`,
    203: `30`,
    2030: `982`,
    2031: `982`,
    2032: `982`,
    2033: `982`,
    2034: `982`,
    2035: `982`,
    2036: `982`,
    2037: `982`,
    2038: `982`,
    2039: `982`,
    204: `31`,
    2040: `982`,
    2041: `982`,
    2042: `982`,
    2043: `982`,
    2044: `982`,
    2045: `982`,
    2046: `982`,
    2047: `982`,
    2048: `982`,
    2049: `982`,
    205: `31`,
    2050: `982`,
    2051: `982`,
    2052: `982`,
    2053: `982`,
    2054: `982`,
    2055: `982`,
    2056: `982`,
    2057: `982`,
    2058: `982`,
    2059: `982`,
    206: `31`,
    2060: `982`,
    2061: `982`,
    2062: `982`,
    2063: `982`,
    2064: `982`,
    2065: `982`,
    2066: `982`,
    2067: `982`,
    2068: `982`,
    2069: `982`,
    207: `32`,
    2070: `982`,
    2071: `982`,
    2072: `982`,
    2073: `982`,
    2074: `982`,
    2075: `982`,
    2076: `982`,
    2077: `982`,
    2078: `982`,
    2079: `982`,
    208: `32`,
    2080: `982`,
    2081: `982`,
    2082: `982`,
    2083: `982`,
    2084: `982`,
    2085: `982`,
    2086: `982`,
    2087: `983`,
    2088: `983`,
    2089: `984`,
    209: `32`,
    2090: `984`,
    2091: `984`,
    2092: `986`,
    2093: `987`,
    2094: `988`,
    2095: `988`,
    2096: `988`,
    2097: `989`,
    2098: `989`,
    2099: `990`,
    21: `2`,
    210: `32`,
    2100: `990`,
    2101: `991`,
    2102: `992`,
    2103: `992`,
    2104: `993`,
    2105: `994`,
    2106: `994`,
    2107: `995`,
    2108: `996`,
    2109: `997`,
    211: `32`,
    2110: `997`,
    2111: `998`,
    2112: `999`,
    2113: `1000`,
    2114: `1000`,
    2115: `1001`,
    2116: `1002`,
    2117: `1003`,
    2118: `1004`,
    2119: `1005`,
    212: `32`,
    2120: `1005`,
    2121: `1006`,
    2122: `1006`,
    2123: `1006`,
    2124: `1008`,
    2125: `1008`,
    2126: `1009`,
    2127: `1010`,
    2128: `1011`,
    2129: `1014`,
    213: `32`,
    2130: `1014`,
    2131: `1014`,
    2132: `1015`,
    2133: `1015`,
    2134: `1016`,
    2135: `1016`,
    2136: `1016`,
    2137: `1017`,
    2138: `1017`,
    2139: `1018`,
    214: `32`,
    2140: `1018`,
    2141: `1018`,
    2142: `1019`,
    2143: `1020`,
    2144: `1020`,
    2145: `1021`,
    2146: `1021`,
    2147: `1021`,
    2148: `1022`,
    2149: `1023`,
    215: `32`,
    2150: `1023`,
    2151: `1024`,
    2152: `1024`,
    2153: `1024`,
    2154: `1026`,
    2155: `1026`,
    2156: `1027`,
    2157: `1028`,
    2158: `1029`,
    2159: `1032`,
    216: `32`,
    2160: `1032`,
    2161: `1032`,
    2162: `1033`,
    2163: `1033`,
    2164: `1033`,
    2165: `1033`,
    2166: `1033`,
    2167: `1033`,
    2168: `1033`,
    2169: `1033`,
    217: `32`,
    2170: `1033`,
    2171: `1033`,
    2172: `1033`,
    2173: `1033`,
    2174: `1033`,
    2175: `1033`,
    2176: `1033`,
    2177: `1033`,
    2178: `1033`,
    2179: `1033`,
    218: `32`,
    2180: `1033`,
    2181: `1033`,
    2182: `1033`,
    2183: `1033`,
    2184: `1033`,
    2185: `1033`,
    2186: `1033`,
    2187: `1033`,
    2188: `1033`,
    2189: `1033`,
    219: `32`,
    2190: `1033`,
    2191: `1033`,
    2192: `1033`,
    2193: `1033`,
    2194: `1033`,
    2195: `1033`,
    2196: `1034`,
    2197: `1034`,
    2198: `1035`,
    2199: `1036`,
    22: `2`,
    220: `32`,
    2200: `1037`,
    2201: `1038`,
    2202: `1038`,
    2203: `1038`,
    2204: `1039`,
    2205: `1039`,
    2206: `1040`,
    2207: `1040`,
    2208: `1040`,
    2209: `1042`,
    221: `32`,
    2210: `1042`,
    2211: `1042`,
    2212: `1042`,
    2213: `1042`,
    2214: `1042`,
    2215: `1042`,
    2216: `1042`,
    2217: `1042`,
    2218: `1042`,
    2219: `1042`,
    222: `32`,
    2220: `1042`,
    2221: `1042`,
    2222: `1042`,
    2223: `1042`,
    2224: `1042`,
    2225: `1042`,
    2226: `1042`,
    2227: `1042`,
    2228: `1042`,
    2229: `1042`,
    223: `32`,
    2230: `1042`,
    2231: `1042`,
    2232: `1042`,
    2233: `1042`,
    2234: `1042`,
    2235: `1042`,
    2236: `1042`,
    2237: `1042`,
    2238: `1042`,
    2239: `1042`,
    224: `32`,
    2240: `1042`,
    2241: `1042`,
    2242: `1042`,
    2243: `1042`,
    2244: `1042`,
    2245: `1042`,
    2246: `1042`,
    2247: `1042`,
    2248: `1042`,
    2249: `1042`,
    225: `32`,
    2250: `1042`,
    2251: `1042`,
    2252: `1042`,
    2253: `1042`,
    2254: `1042`,
    2255: `1042`,
    2256: `1042`,
    2257: `1042`,
    2258: `1042`,
    2259: `1042`,
    226: `32`,
    2260: `1042`,
    2261: `1042`,
    2262: `1042`,
    2263: `1042`,
    2264: `1042`,
    2265: `1042`,
    2266: `1042`,
    2267: `1042`,
    2268: `1042`,
    2269: `1042`,
    227: `32`,
    2270: `1042`,
    2271: `1042`,
    2272: `1042`,
    2273: `1042`,
    2274: `1042`,
    2275: `1042`,
    2276: `1042`,
    2277: `1042`,
    2278: `1042`,
    2279: `1042`,
    228: `32`,
    2280: `1042`,
    2281: `1042`,
    2282: `1042`,
    2283: `1042`,
    2284: `1042`,
    2285: `1042`,
    2286: `1042`,
    2287: `1042`,
    2288: `1042`,
    2289: `1042`,
    229: `32`,
    2290: `1042`,
    2291: `1042`,
    2292: `1042`,
    2293: `1042`,
    2294: `1042`,
    2295: `1042`,
    2296: `1042`,
    2297: `1042`,
    2298: `1042`,
    2299: `1042`,
    23: `2`,
    230: `32`,
    2300: `1042`,
    2301: `1042`,
    2302: `1042`,
    2303: `1042`,
    2304: `1042`,
    2305: `1042`,
    2306: `1042`,
    2307: `1042`,
    2308: `1042`,
    2309: `1042`,
    231: `32`,
    2310: `1042`,
    2311: `1042`,
    2312: `1042`,
    2313: `1042`,
    2314: `1042`,
    2315: `1042`,
    2316: `1042`,
    2317: `1042`,
    2318: `1042`,
    2319: `1042`,
    232: `32`,
    2320: `1042`,
    2321: `1042`,
    2322: `1042`,
    2323: `1042`,
    2324: `1042`,
    2325: `1042`,
    2326: `1042`,
    2327: `1042`,
    2328: `1042`,
    2329: `1042`,
    233: `32`,
    2330: `1042`,
    2331: `1042`,
    2332: `1042`,
    2333: `1042`,
    2334: `1042`,
    2335: `1042`,
    2336: `1042`,
    2337: `1042`,
    2338: `1042`,
    2339: `1042`,
    234: `32`,
    2340: `1042`,
    2341: `1042`,
    2342: `1042`,
    2343: `1042`,
    2344: `1042`,
    2345: `1042`,
    2346: `1042`,
    2347: `1042`,
    2348: `1042`,
    2349: `1042`,
    235: `32`,
    2350: `1042`,
    2351: `1042`,
    2352: `1042`,
    2353: `1042`,
    2354: `1042`,
    2355: `1042`,
    2356: `1042`,
    2357: `1042`,
    2358: `1042`,
    2359: `1042`,
    236: `32`,
    2360: `1042`,
    2361: `1042`,
    2362: `1042`,
    2363: `1042`,
    2364: `1042`,
    2365: `1042`,
    2366: `1042`,
    2367: `1042`,
    2368: `1042`,
    2369: `1042`,
    237: `32`,
    2370: `1042`,
    2371: `1042`,
    2372: `1042`,
    2373: `1043`,
    2374: `1043`,
    2375: `1044`,
    2376: `1044`,
    2377: `1044`,
    2378: `1046`,
    2379: `1046`,
    238: `32`,
    2380: `1047`,
    2381: `1048`,
    2382: `1049`,
    2383: `1052`,
    2384: `1052`,
    2385: `1052`,
    2386: `1053`,
    2387: `1053`,
    2388: `1054`,
    2389: `1054`,
    239: `32`,
    2390: `1055`,
    2391: `1055`,
    2392: `1055`,
    2393: `1057`,
    2394: `1057`,
    2395: `1058`,
    2396: `1059`,
    2397: `1060`,
    2398: `1060`,
    2399: `1061`,
    24: `2`,
    240: `32`,
    2400: `1061`,
    2401: `1062`,
    2402: `1062`,
    2403: `1062`,
    2404: `1063`,
    2405: `1063`,
    2406: `1064`,
    2407: `1064`,
    2408: `1065`,
    2409: `1065`,
    241: `32`,
    2410: `1065`,
    2411: `1066`,
    2412: `1066`,
    2413: `1067`,
    2414: `1067`,
    2415: `1068`,
    2416: `1068`,
    2417: `1068`,
    2418: `1069`,
    2419: `1069`,
    242: `32`,
    2420: `1070`,
    2421: `1070`,
    2422: `1070`,
    2423: `1070`,
    2424: `1070`,
    2425: `1070`,
    2426: `1071`,
    2427: `1071`,
    2428: `1072`,
    2429: `1073`,
    243: `32`,
    2430: `1074`,
    2431: `1074`,
    2432: `1075`,
    2433: `1076`,
    2434: `1076`,
    2435: `1077`,
    2436: `1078`,
    2437: `1078`,
    2438: `1079`,
    2439: `1080`,
    244: `32`,
    2440: `1082`,
    2441: `1082`,
    2442: `1083`,
    2443: `1083`,
    2444: `1083`,
    2445: `1084`,
    2446: `1084`,
    2447: `1085`,
    2448: `1085`,
    2449: `1085`,
    245: `32`,
    2450: `1086`,
    2451: `1087`,
    2452: `1087`,
    2453: `1088`,
    2454: `1088`,
    2455: `1089`,
    2456: `1090`,
    2457: `1094`,
    2458: `1094`,
    2459: `1095`,
    246: `32`,
    2460: `1096`,
    2461: `1097`,
    2462: `1098`,
    2463: `1098`,
    2464: `1099`,
    2465: `1099`,
    2466: `1099`,
    2467: `1100`,
    2468: `1101`,
    2469: `1106`,
    247: `32`,
    2470: `1106`,
    2471: `1107`,
    2472: `1108`,
    2473: `1108`,
    2474: `1109`,
    2475: `1110`,
    2476: `1110`,
    2477: `1111`,
    2478: `1111`,
    2479: `1111`,
    248: `32`,
    2480: `1113`,
    2481: `1113`,
    2482: `1114`,
    2483: `1115`,
    2484: `1115`,
    2485: `1116`,
    2486: `1117`,
    2487: `1117`,
    2488: `1118`,
    2489: `1118`,
    249: `32`,
    2490: `1118`,
    2491: `1119`,
    2492: `1119`,
    2493: `1120`,
    2494: `1120`,
    2495: `1121`,
    2496: `1122`,
    2497: `1122`,
    2498: `1123`,
    2499: `1124`,
    25: `2`,
    250: `32`,
    2500: `1124`,
    2501: `1125`,
    2502: `1126`,
    2503: `1128`,
    2504: `1128`,
    2505: `1128`,
    2506: `1129`,
    2507: `1130`,
    2508: `1131`,
    2509: `1131`,
    251: `32`,
    2510: `1132`,
    2511: `1132`,
    2512: `1133`,
    2513: `1134`,
    2514: `1135`,
    2515: `1136`,
    2516: `1136`,
    2517: `1137`,
    2518: `1138`,
    2519: `1138`,
    252: `32`,
    2520: `1139`,
    2521: `1139`,
    2522: `1140`,
    2523: `1140`,
    2524: `1141`,
    2525: `1141`,
    2526: `1141`,
    2527: `1143`,
    2528: `1143`,
    2529: `1143`,
    253: `32`,
    2530: `1144`,
    2531: `1144`,
    2532: `1144`,
    2533: `1144`,
    2534: `1145`,
    2535: `1145`,
    2536: `1145`,
    2537: `1146`,
    2538: `1146`,
    2539: `1146`,
    254: `32`,
    2540: `1147`,
    2541: `1147`,
    2542: `1148`,
    2543: `1148`,
    2544: `1148`,
    2545: `1150`,
    2546: `1150`,
    2547: `1150`,
    2548: `1151`,
    2549: `1151`,
    255: `32`,
    2550: `1151`,
    2551: `1152`,
    2552: `1152`,
    2553: `1153`,
    2554: `1153`,
    2555: `1153`,
    2556: `1155`,
    2557: `1156`,
    2558: `1156`,
    2559: `1157`,
    256: `32`,
    2560: `1158`,
    2561: `1159`,
    2562: `1159`,
    2563: `1160`,
    2564: `1160`,
    2565: `1161`,
    2566: `1162`,
    2567: `1163`,
    2568: `1164`,
    2569: `1164`,
    257: `34`,
    2570: `1165`,
    2571: `1166`,
    2572: `1167`,
    2573: `1168`,
    2574: `1168`,
    2575: `1169`,
    2576: `1170`,
    2577: `1171`,
    2578: `1171`,
    2579: `1171`,
    258: `36`,
    2580: `1172`,
    2581: `1172`,
    2582: `1172`,
    2583: `1173`,
    2584: `1174`,
    2585: `1175`,
    2586: `1176`,
    2587: `1176`,
    2588: `1176`,
    2589: `1178`,
    259: `36`,
    2590: `1178`,
    2591: `1178`,
    2592: `1179`,
    2593: `1179`,
    2594: `1179`,
    2595: `1180`,
    2596: `1180`,
    2597: `1181`,
    2598: `1181`,
    2599: `1182`,
    26: `2`,
    260: `37`,
    2600: `1182`,
    2601: `1182`,
    2602: `1184`,
    2603: `1184`,
    2604: `1184`,
    2605: `1185`,
    2606: `1185`,
    2607: `1185`,
    2608: `1186`,
    2609: `1186`,
    261: `37`,
    2610: `1187`,
    2611: `1187`,
    2612: `1188`,
    2613: `1188`,
    2614: `1188`,
    2615: `1190`,
    2616: `1190`,
    2617: `1190`,
    2618: `1191`,
    2619: `1191`,
    262: `37`,
    2620: `1192`,
    2621: `1192`,
    2622: `1192`,
    2623: `1194`,
    2624: `1194`,
    2625: `1194`,
    2626: `1196`,
    2627: `1196`,
    2628: `1196`,
    2629: `1198`,
    263: `38`,
    2630: `1198`,
    2631: `1198`,
    2632: `1200`,
    2633: `1200`,
    2634: `1200`,
    2635: `1202`,
    2636: `1202`,
    2637: `1202`,
    2638: `1203`,
    2639: `1203`,
    264: `38`,
    2640: `1203`,
    2641: `1204`,
    2642: `1204`,
    2643: `1204`,
    2644: `1205`,
    2645: `1205`,
    2646: `1206`,
    2647: `1206`,
    2648: `1207`,
    2649: `1207`,
    265: `39`,
    2650: `1208`,
    2651: `1208`,
    2652: `1208`,
    2653: `1210`,
    2654: `1210`,
    2655: `1210`,
    2656: `1211`,
    2657: `1211`,
    2658: `1211`,
    2659: `1212`,
    266: `39`,
    2660: `1212`,
    2661: `1213`,
    2662: `1213`,
    2663: `1214`,
    2664: `1214`,
    2665: `1214`,
    2666: `1216`,
    2667: `1216`,
    2668: `1216`,
    2669: `1218`,
    267: `40`,
    2670: `1218`,
    2671: `1218`,
    2672: `1219`,
    2673: `1219`,
    2674: `1219`,
    2675: `1220`,
    2676: `1220`,
    2677: `1221`,
    2678: `1221`,
    2679: `1222`,
    268: `40`,
    2680: `1222`,
    2681: `1222`,
    2682: `1224`,
    2683: `1224`,
    2684: `1224`,
    2685: `1225`,
    2686: `1225`,
    2687: `1226`,
    2688: `1226`,
    2689: `1226`,
    269: `40`,
    2690: `1228`,
    2691: `1228`,
    2692: `1228`,
    2693: `1230`,
    2694: `1230`,
    2695: `1230`,
    2696: `1231`,
    2697: `1231`,
    2698: `1232`,
    2699: `1232`,
    27: `2`,
    270: `41`,
    2700: `1232`,
    2701: `1234`,
    2702: `1234`,
    2703: `1234`,
    2704: `1235`,
    2705: `1235`,
    2706: `1236`,
    2707: `1236`,
    2708: `1236`,
    2709: `1238`,
    271: `41`,
    2710: `1238`,
    2711: `1239`,
    2712: `1239`,
    2713: `1239`,
    2714: `1240`,
    2715: `1240`,
    2716: `1241`,
    2717: `1241`,
    2718: `1241`,
    2719: `1243`,
    272: `42`,
    2720: `1243`,
    2721: `1244`,
    2722: `1244`,
    2723: `1244`,
    2724: `1245`,
    2725: `1245`,
    2726: `1246`,
    2727: `1246`,
    2728: `1246`,
    2729: `1248`,
    273: `42`,
    2730: `1248`,
    2731: `1249`,
    2732: `1249`,
    2733: `1249`,
    2734: `1250`,
    2735: `1250`,
    2736: `1251`,
    2737: `1251`,
    2738: `1251`,
    2739: `1253`,
    274: `43`,
    2740: `1253`,
    2741: `1254`,
    2742: `1254`,
    2743: `1254`,
    2744: `1255`,
    2745: `1255`,
    2746: `1256`,
    2747: `1256`,
    2748: `1256`,
    2749: `1258`,
    275: `43`,
    2750: `1258`,
    2751: `1258`,
    2752: `1260`,
    2753: `1260`,
    2754: `1260`,
    2755: `1262`,
    2756: `1262`,
    2757: `1262`,
    2758: `1264`,
    2759: `1264`,
    276: `44`,
    2760: `1264`,
    2761: `1266`,
    2762: `1266`,
    2763: `1267`,
    2764: `1267`,
    2765: `1267`,
    2766: `1268`,
    2767: `1268`,
    2768: `1269`,
    2769: `1269`,
    277: `45`,
    2770: `1269`,
    2771: `1271`,
    2772: `1271`,
    2773: `1271`,
    2774: `1273`,
    2775: `1274`,
    2776: `1274`,
    2777: `1275`,
    2778: `1275`,
    2779: `1275`,
    278: `50`,
    2780: `1275`,
    2781: `1275`,
    2782: `1275`,
    2783: `1275`,
    2784: `1275`,
    2785: `1275`,
    2786: `1275`,
    2787: `1276`,
    2788: `1276`,
    2789: `1277`,
    279: `50`,
    2790: `1278`,
    2791: `1278`,
    2792: `1278`,
    2793: `1279`,
    2794: `1280`,
    2795: `1281`,
    2796: `1281`,
    2797: `1282`,
    2798: `1283`,
    2799: `1283`,
    28: `2`,
    280: `51`,
    2800: `1283`,
    2801: `1284`,
    2802: `1284`,
    2803: `1285`,
    2804: `1285`,
    2805: `1286`,
    2806: `1286`,
    2807: `1287`,
    2808: `1287`,
    2809: `1288`,
    281: `51`,
    2810: `1288`,
    2811: `1289`,
    2812: `1289`,
    2813: `1289`,
    2814: `1291`,
    2815: `1291`,
    2816: `1292`,
    2817: `1292`,
    2818: `1292`,
    2819: `1293`,
    282: `52`,
    2820: `1293`,
    2821: `1294`,
    2822: `1295`,
    2823: `1295`,
    2824: `1296`,
    2825: `1296`,
    2826: `1296`,
    2827: `1296`,
    2828: `1296`,
    2829: `1296`,
    283: `53`,
    2830: `1296`,
    2831: `1296`,
    2832: `1296`,
    2833: `1296`,
    2834: `1297`,
    2835: `1297`,
    2836: `1298`,
    2837: `1299`,
    2838: `1299`,
    2839: `1299`,
    284: `59`,
    2840: `1300`,
    2841: `1301`,
    2842: `1302`,
    2843: `1302`,
    2844: `1303`,
    2845: `1304`,
    2846: `1304`,
    2847: `1304`,
    2848: `1305`,
    2849: `1305`,
    285: `59`,
    2850: `1306`,
    2851: `1306`,
    2852: `1306`,
    2853: `1306`,
    2854: `1306`,
    2855: `1306`,
    2856: `1307`,
    2857: `1307`,
    2858: `1308`,
    2859: `1309`,
    286: `60`,
    2860: `1311`,
    2861: `1311`,
    2862: `1312`,
    2863: `1312`,
    2864: `1313`,
    2865: `1313`,
    2866: `1313`,
    2867: `1314`,
    2868: `1314`,
    2869: `1315`,
    287: `61`,
    2870: `1315`,
    2871: `1316`,
    2872: `1317`,
    2873: `1318`,
    2874: `1319`,
    2875: `1319`,
    2876: `1320`,
    2877: `1320`,
    2878: `1321`,
    2879: `1321`,
    288: `61`,
    2880: `1322`,
    2881: `1323`,
    2882: `1323`,
    2883: `1324`,
    2884: `1324`,
    2885: `1325`,
    2886: `1325`,
    2887: `1326`,
    2888: `1326`,
    2889: `1326`,
    289: `62`,
    2890: `1328`,
    2891: `1329`,
    2892: `1330`,
    2893: `1331`,
    2894: `1332`,
    2895: `1334`,
    2896: `1335`,
    2897: `1335`,
    2898: `1336`,
    2899: `1337`,
    29: `2`,
    290: `62`,
    2900: `1337`,
    2901: `1338`,
    2902: `1338`,
    2903: `1339`,
    2904: `1339`,
    2905: `1340`,
    2906: `1341`,
    2907: `1343`,
    2908: `1343`,
    2909: `1344`,
    291: `63`,
    2910: `1345`,
    2911: `1345`,
    2912: `1345`,
    2913: `1346`,
    2914: `1346`,
    2915: `1347`,
    2916: `1347`,
    2917: `1347`,
    2918: `1350`,
    2919: `1351`,
    292: `64`,
    2920: `1351`,
    2921: `1352`,
    2922: `1353`,
    2923: `1353`,
    2924: `1354`,
    2925: `1354`,
    2926: `1354`,
    2927: `1355`,
    2928: `1356`,
    2929: `1357`,
    293: `65`,
    2930: `1357`,
    2931: `1357`,
    2932: `1358`,
    2933: `1359`,
    2934: `1360`,
    2935: `1361`,
    2936: `1362`,
    2937: `1362`,
    2938: `1363`,
    2939: `1363`,
    294: `66`,
    2940: `1363`,
    2941: `1366`,
    2942: `1367`,
    2943: `1367`,
    2944: `1368`,
    2945: `1369`,
    2946: `1369`,
    2947: `1370`,
    2948: `1370`,
    2949: `1370`,
    295: `66`,
    2950: `1371`,
    2951: `1372`,
    2952: `1372`,
    2953: `1372`,
    2954: `1373`,
    2955: `1374`,
    2956: `1375`,
    2957: `1376`,
    2958: `1377`,
    2959: `1377`,
    296: `67`,
    2960: `1378`,
    2961: `1378`,
    2962: `1378`,
    2963: `1380`,
    2964: `1380`,
    2965: `1380`,
    2966: `1382`,
    2967: `1382`,
    2968: `1382`,
    2969: `1384`,
    297: `67`,
    2970: `1384`,
    2971: `1384`,
    2972: `1385`,
    2973: `1385`,
    2974: `1385`,
    2975: `1386`,
    2976: `1386`,
    2977: `1386`,
    2978: `1387`,
    2979: `1387`,
    298: `67`,
    2980: `1387`,
    2981: `1388`,
    2982: `1389`,
    2983: `1389`,
    2984: `1389`,
    2985: `1390`,
    2986: `1391`,
    2987: `1391`,
    2988: `1391`,
    2989: `1392`,
    299: `68`,
    2990: `1393`,
    2991: `1393`,
    2992: `1394`,
    2993: `1394`,
    2994: `1395`,
    2995: `1395`,
    2996: `1396`,
    2997: `1396`,
    2998: `1397`,
    2999: `1397`,
    3: `2`,
    30: `2`,
    300: `68`,
    3000: `1398`,
    3001: `1398`,
    3002: `1399`,
    3003: `1399`,
    3004: `1399`,
    3005: `1401`,
    3006: `1401`,
    3007: `1401`,
    3008: `1403`,
    3009: `1403`,
    301: `69`,
    3010: `1403`,
    3011: `1404`,
    3012: `1404`,
    3013: `1405`,
    3014: `1405`,
    3015: `1405`,
    3016: `1407`,
    3017: `1407`,
    3018: `1407`,
    3019: `1409`,
    302: `69`,
    3020: `1410`,
    3021: `1412`,
    3022: `1413`,
    3023: `1414`,
    3024: `1415`,
    3025: `1415`,
    3026: `1416`,
    3027: `1416`,
    3028: `1417`,
    3029: `1417`,
    303: `70`,
    3030: `1417`,
    3031: `1418`,
    3032: `1420`,
    3033: `1421`,
    3034: `1422`,
    3035: `1422`,
    3036: `1422`,
    3037: `1423`,
    3038: `1424`,
    3039: `1424`,
    304: `71`,
    3040: `1425`,
    3041: `1425`,
    3042: `1425`,
    3043: `1426`,
    3044: `1428`,
    3045: `1428`,
    3046: `1429`,
    3047: `1429`,
    3048: `1430`,
    3049: `1431`,
    305: `71`,
    3050: `1433`,
    3051: `1433`,
    3052: `1433`,
    3053: `1435`,
    3054: `1436`,
    3055: `1436`,
    3056: `1437`,
    3057: `1437`,
    3058: `1438`,
    3059: `1438`,
    306: `72`,
    3060: `1438`,
    3061: `1439`,
    3062: `1439`,
    3063: `1439`,
    3064: `1441`,
    3065: `1441`,
    3066: `1441`,
    3067: `1443`,
    3068: `1444`,
    3069: `1444`,
    307: `73`,
    3070: `1444`,
    3071: `1445`,
    3072: `1445`,
    3073: `1446`,
    3074: `1447`,
    3075: `1447`,
    3076: `1447`,
    3077: `1448`,
    3078: `1448`,
    3079: `1449`,
    308: `73`,
    3080: `1450`,
    3081: `1450`,
    3082: `1450`,
    3083: `1451`,
    3084: `1451`,
    3085: `1452`,
    3086: `1453`,
    3087: `1453`,
    3088: `1453`,
    3089: `1454`,
    309: `74`,
    3090: `1454`,
    3091: `1455`,
    3092: `1456`,
    3093: `1456`,
    3094: `1456`,
    3095: `1457`,
    3096: `1458`,
    3097: `1458`,
    3098: `1459`,
    3099: `1460`,
    31: `2`,
    310: `75`,
    3100: `1460`,
    3101: `1460`,
    3102: `1461`,
    3103: `1461`,
    3104: `1462`,
    3105: `1463`,
    3106: `1463`,
    3107: `1463`,
    3108: `1464`,
    3109: `1464`,
    311: `77`,
    3110: `1464`,
    3111: `1465`,
    3112: `1466`,
    3113: `1466`,
    3114: `1467`,
    3115: `1467`,
    3116: `1467`,
    3117: `1468`,
    3118: `1469`,
    3119: `1469`,
    312: `78`,
    3120: `1470`,
    3121: `1472`,
    3122: `1473`,
    3123: `1474`,
    3124: `1475`,
    3125: `1475`,
    3126: `1475`,
    3127: `1476`,
    3128: `1476`,
    3129: `1477`,
    313: `78`,
    3130: `1478`,
    3131: `1479`,
    3132: `1481`,
    3133: `1482`,
    3134: `1483`,
    3135: `1484`,
    3136: `1484`,
    3137: `1484`,
    3138: `1485`,
    3139: `1485`,
    314: `79`,
    3140: `1486`,
    3141: `1486`,
    3142: `1486`,
    3143: `1487`,
    3144: `1487`,
    3145: `1487`,
    3146: `1489`,
    3147: `1490`,
    3148: `1490`,
    3149: `1490`,
    315: `79`,
    3150: `1491`,
    3151: `1492`,
    3152: `1493`,
    3153: `1494`,
    3154: `1495`,
    3155: `1497`,
    3156: `1498`,
    3157: `1499`,
    3158: `1499`,
    3159: `1500`,
    316: `79`,
    3160: `1501`,
    3161: `1502`,
    3162: `1503`,
    3163: `1504`,
    3164: `1505`,
    3165: `1507`,
    3166: `1508`,
    3167: `1508`,
    3168: `1508`,
    3169: `1511`,
    317: `79`,
    3170: `1511`,
    3171: `1512`,
    3172: `1512`,
    3173: `1513`,
    3174: `1514`,
    3175: `1515`,
    3176: `1516`,
    3177: `1516`,
    3178: `1517`,
    3179: `1518`,
    318: `79`,
    3180: `1518`,
    3181: `1519`,
    3182: `1519`,
    3183: `1520`,
    3184: `1520`,
    3185: `1521`,
    3186: `1522`,
    3187: `1523`,
    3188: `1523`,
    3189: `1524`,
    319: `79`,
    3190: `1525`,
    3191: `1526`,
    3192: `1527`,
    3193: `1527`,
    3194: `1528`,
    3195: `1529`,
    3196: `1530`,
    3197: `1532`,
    3198: `1533`,
    3199: `1533`,
    32: `2`,
    320: `79`,
    3200: `1534`,
    3201: `1536`,
    3202: `1537`,
    3203: `1538`,
    3204: `1539`,
    3205: `1540`,
    3206: `1540`,
    3207: `1541`,
    3208: `1542`,
    3209: `1543`,
    321: `79`,
    3210: `1544`,
    3211: `1546`,
    3212: `1546`,
    3213: `1547`,
    3214: `1547`,
    3215: `1548`,
    3216: `1549`,
    3217: `1550`,
    3218: `1550`,
    3219: `1550`,
    322: `79`,
    3220: `1551`,
    3221: `1551`,
    3222: `1551`,
    3223: `1553`,
    3224: `1553`,
    3225: `1554`,
    3226: `1555`,
    3227: `1555`,
    3228: `1556`,
    3229: `1558`,
    323: `79`,
    3230: `1559`,
    3231: `1559`,
    3232: `1560`,
    324: `80`,
    325: `80`,
    326: `81`,
    327: `82`,
    328: `82`,
    329: `82`,
    33: `2`,
    330: `83`,
    331: `84`,
    332: `85`,
    333: `85`,
    334: `86`,
    335: `87`,
    336: `87`,
    337: `87`,
    338: `88`,
    339: `88`,
    34: `2`,
    340: `89`,
    341: `89`,
    342: `90`,
    343: `90`,
    344: `93`,
    345: `93`,
    346: `94`,
    347: `94`,
    348: `95`,
    349: `96`,
    35: `2`,
    350: `96`,
    351: `97`,
    352: `98`,
    353: `98`,
    354: `99`,
    355: `100`,
    356: `100`,
    357: `101`,
    358: `102`,
    359: `103`,
    36: `2`,
    360: `103`,
    361: `104`,
    362: `105`,
    363: `105`,
    364: `106`,
    365: `107`,
    366: `107`,
    367: `108`,
    368: `109`,
    369: `110`,
    37: `2`,
    370: `111`,
    371: `111`,
    372: `113`,
    373: `113`,
    374: `114`,
    375: `114`,
    376: `115`,
    377: `116`,
    378: `116`,
    379: `117`,
    38: `2`,
    380: `117`,
    381: `117`,
    382: `118`,
    383: `119`,
    384: `120`,
    385: `120`,
    386: `121`,
    387: `121`,
    388: `121`,
    389: `122`,
    39: `2`,
    390: `123`,
    391: `123`,
    392: `124`,
    393: `124`,
    394: `125`,
    395: `125`,
    396: `125`,
    397: `126`,
    398: `127`,
    399: `127`,
    4: `2`,
    40: `2`,
    400: `128`,
    401: `128`,
    402: `129`,
    403: `129`,
    404: `129`,
    405: `130`,
    406: `130`,
    407: `131`,
    408: `132`,
    409: `133`,
    41: `2`,
    410: `133`,
    411: `134`,
    412: `135`,
    413: `135`,
    414: `135`,
    415: `136`,
    416: `136`,
    417: `137`,
    418: `138`,
    419: `139`,
    42: `2`,
    420: `140`,
    421: `140`,
    422: `141`,
    423: `142`,
    424: `142`,
    425: `143`,
    426: `144`,
    427: `145`,
    428: `146`,
    429: `146`,
    43: `2`,
    430: `147`,
    431: `148`,
    432: `149`,
    433: `151`,
    434: `151`,
    435: `151`,
    436: `153`,
    437: `153`,
    438: `154`,
    439: `154`,
    44: `2`,
    440: `154`,
    441: `156`,
    442: `156`,
    443: `156`,
    444: `156`,
    445: `156`,
    446: `156`,
    447: `157`,
    448: `157`,
    449: `158`,
    45: `2`,
    450: `159`,
    451: `161`,
    452: `162`,
    453: `164`,
    454: `164`,
    455: `165`,
    456: `165`,
    457: `165`,
    458: `166`,
    459: `166`,
    46: `2`,
    460: `167`,
    461: `167`,
    462: `168`,
    463: `168`,
    464: `168`,
    465: `169`,
    466: `169`,
    467: `170`,
    468: `170`,
    469: `171`,
    47: `2`,
    470: `171`,
    471: `172`,
    472: `173`,
    473: `179`,
    474: `179`,
    475: `181`,
    476: `182`,
    477: `182`,
    478: `183`,
    479: `184`,
    48: `2`,
    480: `184`,
    481: `185`,
    482: `186`,
    483: `186`,
    484: `186`,
    485: `187`,
    486: `187`,
    487: `187`,
    488: `188`,
    489: `189`,
    49: `4`,
    490: `189`,
    491: `190`,
    492: `190`,
    493: `191`,
    494: `192`,
    495: `198`,
    496: `199`,
    497: `199`,
    498: `200`,
    499: `200`,
    5: `2`,
    50: `4`,
    500: `200`,
    501: `200`,
    502: `200`,
    503: `200`,
    504: `200`,
    505: `200`,
    506: `200`,
    507: `200`,
    508: `201`,
    509: `201`,
    51: `5`,
    510: `202`,
    511: `203`,
    512: `203`,
    513: `203`,
    514: `204`,
    515: `205`,
    516: `206`,
    517: `206`,
    518: `207`,
    519: `208`,
    52: `5`,
    520: `208`,
    521: `208`,
    522: `209`,
    523: `209`,
    524: `210`,
    525: `210`,
    526: `211`,
    527: `212`,
    528: `212`,
    529: `213`,
    53: `5`,
    530: `214`,
    531: `214`,
    532: `215`,
    533: `215`,
    534: `216`,
    535: `217`,
    536: `217`,
    537: `217`,
    538: `218`,
    539: `218`,
    54: `6`,
    540: `218`,
    541: `220`,
    542: `220`,
    543: `221`,
    544: `222`,
    545: `222`,
    546: `223`,
    547: `224`,
    548: `224`,
    549: `225`,
    55: `7`,
    550: `226`,
    551: `226`,
    552: `227`,
    553: `228`,
    554: `228`,
    555: `229`,
    556: `230`,
    557: `230`,
    558: `230`,
    559: `231`,
    56: `8`,
    560: `231`,
    561: `231`,
    562: `232`,
    563: `232`,
    564: `233`,
    565: `234`,
    566: `234`,
    567: `234`,
    568: `235`,
    569: `235`,
    57: `9`,
    570: `235`,
    571: `236`,
    572: `236`,
    573: `237`,
    574: `237`,
    575: `238`,
    576: `239`,
    577: `239`,
    578: `240`,
    579: `241`,
    58: `10`,
    580: `241`,
    581: `242`,
    582: `243`,
    583: `245`,
    584: `245`,
    585: `246`,
    586: `246`,
    587: `247`,
    588: `247`,
    589: `247`,
    59: `11`,
    590: `249`,
    591: `249`,
    592: `250`,
    593: `250`,
    594: `250`,
    595: `251`,
    596: `251`,
    597: `252`,
    598: `252`,
    599: `253`,
    6: `2`,
    60: `11`,
    600: `253`,
    601: `253`,
    602: `254`,
    603: `254`,
    604: `255`,
    605: `255`,
    606: `256`,
    607: `256`,
    608: `256`,
    609: `257`,
    61: `12`,
    610: `257`,
    611: `258`,
    612: `258`,
    613: `259`,
    614: `259`,
    615: `260`,
    616: `261`,
    617: `267`,
    618: `267`,
    619: `269`,
    62: `13`,
    620: `270`,
    621: `270`,
    622: `271`,
    623: `272`,
    624: `272`,
    625: `273`,
    626: `274`,
    627: `274`,
    628: `274`,
    629: `275`,
    63: `14`,
    630: `275`,
    631: `275`,
    632: `276`,
    633: `277`,
    634: `277`,
    635: `278`,
    636: `278`,
    637: `279`,
    638: `280`,
    639: `286`,
    64: `14`,
    640: `286`,
    641: `287`,
    642: `287`,
    643: `288`,
    644: `289`,
    645: `289`,
    646: `290`,
    647: `290`,
    648: `292`,
    649: `293`,
    65: `15`,
    650: `293`,
    651: `294`,
    652: `295`,
    653: `295`,
    654: `296`,
    655: `297`,
    656: `298`,
    657: `298`,
    658: `298`,
    659: `299`,
    66: `16`,
    660: `299`,
    661: `299`,
    662: `300`,
    663: `301`,
    664: `301`,
    665: `302`,
    666: `302`,
    667: `303`,
    668: `304`,
    669: `310`,
    67: `17`,
    670: `310`,
    671: `311`,
    672: `312`,
    673: `312`,
    674: `313`,
    675: `314`,
    676: `314`,
    677: `315`,
    678: `315`,
    679: `316`,
    68: `18`,
    680: `317`,
    681: `317`,
    682: `317`,
    683: `318`,
    684: `318`,
    685: `318`,
    686: `320`,
    687: `320`,
    688: `321`,
    689: `322`,
    69: `19`,
    690: `322`,
    691: `323`,
    692: `324`,
    693: `324`,
    694: `325`,
    695: `326`,
    696: `326`,
    697: `327`,
    698: `328`,
    699: `328`,
    7: `2`,
    70: `20`,
    700: `329`,
    701: `330`,
    702: `330`,
    703: `330`,
    704: `331`,
    705: `331`,
    706: `331`,
    707: `332`,
    708: `332`,
    709: `333`,
    71: `20`,
    710: `334`,
    711: `334`,
    712: `334`,
    713: `335`,
    714: `335`,
    715: `335`,
    716: `336`,
    717: `336`,
    718: `337`,
    719: `337`,
    72: `21`,
    720: `338`,
    721: `339`,
    722: `339`,
    723: `340`,
    724: `341`,
    725: `341`,
    726: `342`,
    727: `343`,
    728: `345`,
    729: `345`,
    73: `22`,
    730: `346`,
    731: `346`,
    732: `347`,
    733: `348`,
    734: `348`,
    735: `348`,
    736: `349`,
    737: `349`,
    738: `350`,
    739: `350`,
    74: `23`,
    740: `351`,
    741: `352`,
    742: `352`,
    743: `353`,
    744: `354`,
    745: `355`,
    746: `355`,
    747: `356`,
    748: `356`,
    749: `356`,
    75: `23`,
    750: `357`,
    751: `357`,
    752: `358`,
    753: `358`,
    754: `359`,
    755: `360`,
    756: `360`,
    757: `361`,
    758: `362`,
    759: `362`,
    76: `24`,
    760: `363`,
    761: `364`,
    762: `366`,
    763: `367`,
    764: `367`,
    765: `368`,
    766: `368`,
    767: `368`,
    768: `368`,
    769: `368`,
    77: `25`,
    770: `368`,
    771: `368`,
    772: `368`,
    773: `368`,
    774: `368`,
    775: `369`,
    776: `369`,
    777: `370`,
    778: `371`,
    779: `371`,
    78: `26`,
    780: `371`,
    781: `372`,
    782: `373`,
    783: `374`,
    784: `374`,
    785: `375`,
    786: `376`,
    787: `376`,
    788: `376`,
    789: `377`,
    79: `26`,
    790: `377`,
    791: `378`,
    792: `378`,
    793: `379`,
    794: `379`,
    795: `380`,
    796: `380`,
    797: `380`,
    798: `382`,
    799: `382`,
    8: `2`,
    80: `27`,
    800: `383`,
    801: `383`,
    802: `383`,
    803: `384`,
    804: `384`,
    805: `385`,
    806: `385`,
    807: `385`,
    808: `386`,
    809: `387`,
    81: `28`,
    810: `387`,
    811: `389`,
    812: `390`,
    813: `390`,
    814: `391`,
    815: `392`,
    816: `392`,
    817: `393`,
    818: `394`,
    819: `395`,
    82: `30`,
    820: `395`,
    821: `395`,
    822: `396`,
    823: `397`,
    824: `398`,
    825: `399`,
    826: `400`,
    827: `405`,
    828: `405`,
    829: `406`,
    83: `30`,
    830: `407`,
    831: `407`,
    832: `408`,
    833: `409`,
    834: `410`,
    835: `410`,
    836: `411`,
    837: `411`,
    838: `411`,
    839: `412`,
    84: `30`,
    840: `413`,
    841: `413`,
    842: `414`,
    843: `414`,
    844: `414`,
    845: `414`,
    846: `414`,
    847: `414`,
    848: `414`,
    849: `414`,
    85: `30`,
    850: `414`,
    851: `414`,
    852: `415`,
    853: `415`,
    854: `416`,
    855: `417`,
    856: `417`,
    857: `417`,
    858: `418`,
    859: `419`,
    86: `30`,
    860: `420`,
    861: `420`,
    862: `421`,
    863: `422`,
    864: `422`,
    865: `422`,
    866: `423`,
    867: `423`,
    868: `424`,
    869: `424`,
    87: `30`,
    870: `425`,
    871: `425`,
    872: `426`,
    873: `426`,
    874: `426`,
    875: `428`,
    876: `428`,
    877: `429`,
    878: `429`,
    879: `429`,
    88: `30`,
    880: `430`,
    881: `430`,
    882: `432`,
    883: `433`,
    884: `433`,
    885: `434`,
    886: `435`,
    887: `435`,
    888: `436`,
    889: `437`,
    89: `30`,
    890: `437`,
    891: `437`,
    892: `438`,
    893: `439`,
    894: `440`,
    895: `441`,
    896: `442`,
    897: `447`,
    898: `447`,
    899: `448`,
    9: `2`,
    90: `30`,
    900: `449`,
    901: `449`,
    902: `450`,
    903: `451`,
    904: `451`,
    905: `452`,
    906: `452`,
    907: `452`,
    908: `453`,
    909: `454`,
    91: `30`,
    910: `454`,
    911: `455`,
    912: `455`,
    913: `455`,
    914: `455`,
    915: `455`,
    916: `455`,
    917: `455`,
    918: `455`,
    919: `455`,
    92: `30`,
    920: `455`,
    921: `456`,
    922: `456`,
    923: `457`,
    924: `458`,
    925: `458`,
    926: `458`,
    927: `459`,
    928: `460`,
    929: `461`,
    93: `30`,
    930: `461`,
    931: `462`,
    932: `463`,
    933: `463`,
    934: `463`,
    935: `464`,
    936: `464`,
    937: `465`,
    938: `465`,
    939: `466`,
    94: `30`,
    940: `466`,
    941: `467`,
    942: `467`,
    943: `467`,
    944: `469`,
    945: `469`,
    946: `470`,
    947: `470`,
    948: `470`,
    949: `471`,
    95: `30`,
    950: `471`,
    951: `472`,
    952: `472`,
    953: `473`,
    954: `473`,
    955: `474`,
    956: `475`,
    957: `482`,
    958: `482`,
    959: `483`,
    96: `30`,
    960: `483`,
    961: `483`,
    962: `484`,
    963: `485`,
    964: `492`,
    965: `492`,
    966: `493`,
    967: `493`,
    968: `493`,
    969: `494`,
    97: `30`,
    970: `495`,
    971: `495`,
    972: `496`,
    973: `497`,
    974: `498`,
    975: `505`,
    976: `505`,
    977: `506`,
    978: `506`,
    979: `507`,
    98: `30`,
    980: `508`,
    981: `508`,
    982: `509`,
    983: `509`,
    984: `510`,
    985: `510`,
    986: `510`,
    987: `513`,
    988: `513`,
    989: `514`,
    99: `30`,
    990: `515`,
    991: `516`,
    992: `516`,
    993: `516`,
    994: `516`,
    995: `516`,
    996: `516`,
    997: `517`,
    998: `517`,
    999: `517`
    },
  appClear: `CQ==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 1,
  stateKeys: 5,
  stateSize: 531,
  unsupported: [],
  version: 13,
  warnings: [`This program uses 'ALGOExitMode: DeleteAndCloseOutAll_SoundASAs_UnsoundElse' (the default) _and_ creates Map entries and Reach cannot guarantee that these closed at application exit, but we are generating a close out anyways. If those resources are not freed, then this close out will fail and the final transaction will always be rejected.`]
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:390:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:163:29:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO
  };
export const _Participants = {
  "Deployer": Deployer,
  "arc200_approve": arc200_approve,
  "arc200_transfer": arc200_transfer,
  "arc200_transferFrom": arc200_transferFrom,
  "createAllowanceBox": createAllowanceBox,
  "createBalanceBox": createBalanceBox,
  "deregister": deregister,
  "grant": grant,
  "nop": nop,
  "register": register,
  "touch": touch
  };
export const _APIs = {
  arc200_approve: arc200_approve,
  arc200_transfer: arc200_transfer,
  arc200_transferFrom: arc200_transferFrom,
  createAllowanceBox: createAllowanceBox,
  createBalanceBox: createBalanceBox,
  deregister: deregister,
  grant: grant,
  nop: nop,
  register: register,
  touch: touch
  };

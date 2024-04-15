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
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Object({
    manager: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Struct([['manager', ctc0]]);
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc5 = stdlib.T_Bool;
  
  const _constructor = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v430, v435, v437, v441] = svs;
      return (await ((async () => {
        
        
        return v430;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _manager = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v430, v435, v437, v441] = svs;
      return (await ((async () => {
        
        const v444 = v437.manager;
        
        return v444;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _state = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v430, v435, v437, v441] = svs;
      return (await ((async () => {
        
        const v445 = v437.manager;
        const v446 = {
          manager: v445
          };
        
        return v446;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _supportsInterface = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v430, v435, v437, v441] = svs;
      return (await ((async (_v448 ) => {
          const v448 = stdlib.protect(ctc4, _v448, null);
        
        
        return false;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _zeroAddress = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v430, v435, v437, v441] = svs;
      return (await ((async () => {
        
        
        return v435;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      constructor: {
        decode: _constructor,
        dom: [],
        rng: ctc0
        },
      manager: {
        decode: _manager,
        dom: [],
        rng: ctc0
        },
      state: {
        decode: _state,
        dom: [],
        rng: ctc3
        },
      supportsInterface: {
        decode: _supportsInterface,
        dom: [ctc4],
        rng: ctc5
        },
      zeroAddress: {
        decode: _zeroAddress,
        dom: [],
        rng: ctc0
        }
      },
    views: {
      3: [ctc0, ctc0, ctc1, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Object({
    zeroAddress: ctc0
    });
  const ctc2 = stdlib.T_Tuple([ctc0]);
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_UInt256;
  const ctc5 = stdlib.T_Tuple([ctc3, ctc0, ctc4]);
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Data({
    a_admin_grant0_80: ctc2,
    arc200_transfer0_80: ctc5,
    nop0_80: ctc6,
    touch0_80: ctc6
    });
  const ctc8 = stdlib.T_Null;
  const ctc9 = stdlib.T_UInt;
  const ctc10 = stdlib.T_Bool;
  const ctc11 = stdlib.T_Tuple([ctc9, ctc10]);
  
  
  const v425 = stdlib.protect(ctc1, interact.params, 'for Deployer\'s interact field params');
  
  const txn1 = await (ctc.sendrecv({
    args: [v425],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:44:7:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:44:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v431], secs: v433, time: v432, didSend: v31, from: v430 } = txn1;
      
      ;
      const v435 = v431.zeroAddress;
      const v436 = {
        manager: v430
        };
      const v437 = v436;
      const v438 = v432;
      const v441 = stdlib.checkedBigNumberify('./index.rsh:39:11:after expr stmt semicolon', stdlib.UInt_max, '0');
      
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
    tys: [ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v431], secs: v433, time: v432, didSend: v31, from: v430 } = txn1;
  ;
  const v435 = v431.zeroAddress;
  const v436 = {
    manager: v430
    };
  let v437 = v436;
  let v438 = v432;
  let v441 = stdlib.checkedBigNumberify('./index.rsh:39:11:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn2 = txn1;
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v508], secs: v510, time: v509, didSend: v281, from: v507 } = txn3;
    switch (v508[0]) {
      case 'a_admin_grant0_80': {
        const v511 = v508[1];
        undefined /* setApiDetails */;
        ;
        const v520 = v511[stdlib.checkedBigNumberify('./index.rsh:82:12:spread', stdlib.UInt_max, '0')];
        const v521 = v437.manager;
        const v522 = stdlib.addressEq(v521, v507);
        stdlib.assert(v522, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:83:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:85:15:application call to [unknown function] (defined at: ./index.rsh:85:15:function exp)'],
          msg: 'must be manager',
          who: 'Deployer'
          });
        const v525 = null;
        await txn3.getOutput('a_admin_grant', 'v525', ctc8, v525);
        const v533 = {
          manager: v520
          };
        const cv437 = v533;
        const cv438 = v509;
        const cv441 = v441;
        
        v437 = cv437;
        v438 = cv438;
        v441 = cv441;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'arc200_transfer0_80': {
        const v597 = v508[1];
        undefined /* setApiDetails */;
        ;
        const v623 = v597[stdlib.checkedBigNumberify('./index.rsh:120:12:spread', stdlib.UInt_max, '0')];
        const v624 = v597[stdlib.checkedBigNumberify('./index.rsh:120:12:spread', stdlib.UInt_max, '1')];
        const v625 = v597[stdlib.checkedBigNumberify('./index.rsh:120:12:spread', stdlib.UInt_max, '2')];
        const v626 = v437.manager;
        const v627 = stdlib.addressEq(v507, v626);
        stdlib.assert(v627, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:121:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:123:15:application call to [unknown function] (defined at: ./index.rsh:123:15:function exp)'],
          msg: 'must be manager',
          who: 'Deployer'
          });
        const v632 = null;
        await txn3.getOutput('arc200_transfer', 'v632', ctc8, v632);
        const v641 = await ctc.getContractAddress();
        const v642 = [v623, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v641];
        const v643 = [v623, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v624];
        const v646 = [];
        const v647 = stdlib.bytesFromHex("0xda7025b9");
        const v648 = undefined /* Remote */;
        const v649 = await txn3.getOutput('internal', 'v648', ctc11, v648);
        const v651 = v649[stdlib.checkedBigNumberify('./index.rsh:76:15:application', stdlib.UInt_max, '0')];
        const v656 = stdlib.add(v441, v651);
        const v657 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v651);
        stdlib.assert(v657, {
          at: './index.rsh:76:15:application',
          fs: ['at ./index.rsh:125:33:application call to [unknown function] (defined at: ./index.rsh:63:45:function exp)', 'at ./index.rsh:123:15:application call to [unknown function] (defined at: ./index.rsh:123:15:function exp)'],
          msg: 'remote bill check',
          who: 'Deployer'
          });
        const cv437 = v437;
        const cv438 = v509;
        const cv441 = v656;
        
        v437 = cv437;
        v438 = cv438;
        v441 = cv441;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'nop0_80': {
        const v683 = v508[1];
        undefined /* setApiDetails */;
        ;
        const v746 = null;
        await txn3.getOutput('nop', 'v746', ctc8, v746);
        const cv437 = v437;
        const cv438 = v509;
        const cv441 = v441;
        
        v437 = cv437;
        v438 = cv438;
        v441 = cv441;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'touch0_80': {
        const v769 = v508[1];
        undefined /* setApiDetails */;
        ;
        const v841 = (stdlib.le(await ctc.getBalance(), v441) ? stdlib.checkedBigNumberify('./index.rsh:101:41:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v441));
        const v842 = stdlib.safeAdd(v841, v441);
        const v843 = v437.manager;
        const v847 = stdlib.sub(v842, v841);
        ;
        const v848 = null;
        await txn3.getOutput('touch', 'v848', ctc8, v848);
        const cv437 = v437;
        const cv438 = v509;
        const cv441 = v847;
        
        v437 = cv437;
        v438 = cv438;
        v441 = cv441;
        
        txn2 = txn3;
        continue;
        break;
        }
      }
    
    }
  return;
  
  
  };
export async function _a_admin_grant3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _a_admin_grant3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _a_admin_grant3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Object({
    manager: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc0]);
  const ctc4 = stdlib.T_Contract;
  const ctc5 = stdlib.T_UInt256;
  const ctc6 = stdlib.T_Tuple([ctc4, ctc0, ctc5]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    a_admin_grant0_80: ctc3,
    arc200_transfer0_80: ctc6,
    nop0_80: ctc7,
    touch0_80: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v430, v435, v437, v441] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc0, ctc1, ctc2]);
  const v449 = ctc.selfAddress();
  const v451 = stdlib.protect(ctc3, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:82:34:application call to [unknown function] (defined at: ./index.rsh:82:34:function exp)', 'at ./index.rsh:51:31:application call to "runa_admin_grant0_80" (defined at: ./index.rsh:82:12:function exp)', 'at ./index.rsh:51:31:application call to [unknown function] (defined at: ./index.rsh:51:31:function exp)'],
    msg: 'in',
    who: 'a_admin_grant'
    });
  const v454 = v437.manager;
  const v455 = stdlib.addressEq(v454, v449);
  stdlib.assert(v455, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:83:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:82:34:application call to [unknown function] (defined at: ./index.rsh:82:34:function exp)', 'at ./index.rsh:51:31:application call to "runa_admin_grant0_80" (defined at: ./index.rsh:82:12:function exp)', 'at ./index.rsh:51:31:application call to [unknown function] (defined at: ./index.rsh:51:31:function exp)'],
    msg: 'must be manager',
    who: 'a_admin_grant'
    });
  const v462 = ['a_admin_grant0_80', v451];
  
  const txn1 = await (ctc.sendrecv({
    args: [v430, v435, v437, v441, v462],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:82:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v508], secs: v510, time: v509, didSend: v281, from: v507 } = txn1;
      
      switch (v508[0]) {
        case 'a_admin_grant0_80': {
          const v511 = v508[1];
          sim_r.txns.push({
            kind: 'api',
            who: "a_admin_grant"
            });
          ;
          const v520 = v511[stdlib.checkedBigNumberify('./index.rsh:82:12:spread', stdlib.UInt_max, '0')];
          const v525 = null;
          const v526 = await txn1.getOutput('a_admin_grant', 'v525', ctc9, v525);
          
          const v533 = {
            manager: v520
            };
          const v1244 = v533;
          const v1246 = v441;
          sim_r.isHalt = false;
          
          break;
          }
        case 'arc200_transfer0_80': {
          const v597 = v508[1];
          
          break;
          }
        case 'nop0_80': {
          const v683 = v508[1];
          
          break;
          }
        case 'touch0_80': {
          const v769 = v508[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc1, ctc2, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v508], secs: v510, time: v509, didSend: v281, from: v507 } = txn1;
  switch (v508[0]) {
    case 'a_admin_grant0_80': {
      const v511 = v508[1];
      undefined /* setApiDetails */;
      ;
      const v520 = v511[stdlib.checkedBigNumberify('./index.rsh:82:12:spread', stdlib.UInt_max, '0')];
      const v521 = v437.manager;
      const v522 = stdlib.addressEq(v521, v507);
      stdlib.assert(v522, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:83:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:85:15:application call to [unknown function] (defined at: ./index.rsh:85:15:function exp)'],
        msg: 'must be manager',
        who: 'a_admin_grant'
        });
      const v525 = null;
      const v526 = await txn1.getOutput('a_admin_grant', 'v525', ctc9, v525);
      if (v281) {
        stdlib.protect(ctc9, await interact.out(v511, v526), {
          at: './index.rsh:82:13:application',
          fs: ['at ./index.rsh:82:13:application call to [unknown function] (defined at: ./index.rsh:82:13:function exp)', 'at ./index.rsh:86:14:application call to "k" (defined at: ./index.rsh:85:15:function exp)', 'at ./index.rsh:85:15:application call to [unknown function] (defined at: ./index.rsh:85:15:function exp)'],
          msg: 'out',
          who: 'a_admin_grant'
          });
        }
      else {
        }
      
      const v533 = {
        manager: v520
        };
      const v1244 = v533;
      const v1246 = v441;
      return;
      
      break;
      }
    case 'arc200_transfer0_80': {
      const v597 = v508[1];
      return;
      break;
      }
    case 'nop0_80': {
      const v683 = v508[1];
      return;
      break;
      }
    case 'touch0_80': {
      const v769 = v508[1];
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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Object({
    manager: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_UInt256;
  const ctc5 = stdlib.T_Tuple([ctc3, ctc0, ctc4]);
  const ctc6 = stdlib.T_Tuple([ctc0]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    a_admin_grant0_80: ctc6,
    arc200_transfer0_80: ctc5,
    nop0_80: ctc7,
    touch0_80: ctc7
    });
  const ctc9 = stdlib.T_Null;
  const ctc10 = stdlib.T_Bool;
  const ctc11 = stdlib.T_Tuple([ctc2, ctc10]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc2, ctc0]);
  
  
  const [v430, v435, v437, v441] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc0, ctc1, ctc2]);
  const v480 = ctc.selfAddress();
  const v482 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:120:57:application call to [unknown function] (defined at: ./index.rsh:120:57:function exp)', 'at ./index.rsh:51:31:application call to "runarc200_transfer0_80" (defined at: ./index.rsh:120:12:function exp)', 'at ./index.rsh:51:31:application call to [unknown function] (defined at: ./index.rsh:51:31:function exp)'],
    msg: 'in',
    who: 'arc200_transfer'
    });
  const v489 = v437.manager;
  const v490 = stdlib.addressEq(v480, v489);
  stdlib.assert(v490, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:121:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:120:57:application call to [unknown function] (defined at: ./index.rsh:120:57:function exp)', 'at ./index.rsh:51:31:application call to "runarc200_transfer0_80" (defined at: ./index.rsh:120:12:function exp)', 'at ./index.rsh:51:31:application call to [unknown function] (defined at: ./index.rsh:51:31:function exp)'],
    msg: 'must be manager',
    who: 'arc200_transfer'
    });
  const v501 = ['arc200_transfer0_80', v482];
  
  const txn1 = await (ctc.sendrecv({
    args: [v430, v435, v437, v441, v501],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:120:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v508], secs: v510, time: v509, didSend: v281, from: v507 } = txn1;
      
      switch (v508[0]) {
        case 'a_admin_grant0_80': {
          const v511 = v508[1];
          
          break;
          }
        case 'arc200_transfer0_80': {
          const v597 = v508[1];
          sim_r.txns.push({
            kind: 'api',
            who: "arc200_transfer"
            });
          ;
          const v623 = v597[stdlib.checkedBigNumberify('./index.rsh:120:12:spread', stdlib.UInt_max, '0')];
          const v624 = v597[stdlib.checkedBigNumberify('./index.rsh:120:12:spread', stdlib.UInt_max, '1')];
          const v625 = v597[stdlib.checkedBigNumberify('./index.rsh:120:12:spread', stdlib.UInt_max, '2')];
          const v632 = null;
          const v633 = await txn1.getOutput('arc200_transfer', 'v632', ctc9, v632);
          
          const v641 = await ctc.getContractAddress();
          const v642 = [v623, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v641];
          const v643 = [v623, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v624];
          const v646 = [];
          const v647 = stdlib.bytesFromHex("0xda7025b9");
          const v648 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v623,
              remote: ({
                accs: [v624],
                apps: [v623],
                bills: stdlib.checkedBigNumberify('./index.rsh:76:15:application', stdlib.UInt_max, '0'),
                boxes: [[ctc12, v642], [ctc12, v643]],
                fees: stdlib.checkedBigNumberify('./index.rsh:70:21:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./index.rsh:76:15:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc10.defaultValue /* simReturnVal */];})();
          const v649 = await txn1.getOutput('internal', 'v648', ctc11, v648);
          const v651 = v649[stdlib.checkedBigNumberify('./index.rsh:76:15:application', stdlib.UInt_max, '0')];
          const v656 = stdlib.add(v441, v651);
          const v1259 = v437;
          const v1261 = v656;
          sim_r.isHalt = false;
          
          break;
          }
        case 'nop0_80': {
          const v683 = v508[1];
          
          break;
          }
        case 'touch0_80': {
          const v769 = v508[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc1, ctc2, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v508], secs: v510, time: v509, didSend: v281, from: v507 } = txn1;
  switch (v508[0]) {
    case 'a_admin_grant0_80': {
      const v511 = v508[1];
      return;
      break;
      }
    case 'arc200_transfer0_80': {
      const v597 = v508[1];
      undefined /* setApiDetails */;
      ;
      const v623 = v597[stdlib.checkedBigNumberify('./index.rsh:120:12:spread', stdlib.UInt_max, '0')];
      const v624 = v597[stdlib.checkedBigNumberify('./index.rsh:120:12:spread', stdlib.UInt_max, '1')];
      const v625 = v597[stdlib.checkedBigNumberify('./index.rsh:120:12:spread', stdlib.UInt_max, '2')];
      const v626 = v437.manager;
      const v627 = stdlib.addressEq(v507, v626);
      stdlib.assert(v627, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:121:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:123:15:application call to [unknown function] (defined at: ./index.rsh:123:15:function exp)'],
        msg: 'must be manager',
        who: 'arc200_transfer'
        });
      const v632 = null;
      const v633 = await txn1.getOutput('arc200_transfer', 'v632', ctc9, v632);
      if (v281) {
        stdlib.protect(ctc9, await interact.out(v597, v633), {
          at: './index.rsh:120:13:application',
          fs: ['at ./index.rsh:120:13:application call to [unknown function] (defined at: ./index.rsh:120:13:function exp)', 'at ./index.rsh:124:14:application call to "k" (defined at: ./index.rsh:123:15:function exp)', 'at ./index.rsh:123:15:application call to [unknown function] (defined at: ./index.rsh:123:15:function exp)'],
          msg: 'out',
          who: 'arc200_transfer'
          });
        }
      else {
        }
      
      const v641 = await ctc.getContractAddress();
      const v642 = [v623, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v641];
      const v643 = [v623, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v624];
      const v646 = [];
      const v647 = stdlib.bytesFromHex("0xda7025b9");
      const v648 = undefined /* Remote */;
      const v649 = await txn1.getOutput('internal', 'v648', ctc11, v648);
      const v651 = v649[stdlib.checkedBigNumberify('./index.rsh:76:15:application', stdlib.UInt_max, '0')];
      const v656 = stdlib.add(v441, v651);
      const v657 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v651);
      stdlib.assert(v657, {
        at: './index.rsh:76:15:application',
        fs: ['at ./index.rsh:125:33:application call to [unknown function] (defined at: ./index.rsh:63:45:function exp)', 'at ./index.rsh:123:15:application call to [unknown function] (defined at: ./index.rsh:123:15:function exp)'],
        msg: 'remote bill check',
        who: 'arc200_transfer'
        });
      const v1259 = v437;
      const v1261 = v656;
      return;
      
      break;
      }
    case 'nop0_80': {
      const v683 = v508[1];
      return;
      break;
      }
    case 'touch0_80': {
      const v769 = v508[1];
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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Object({
    manager: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_Tuple([ctc0]);
  const ctc5 = stdlib.T_Contract;
  const ctc6 = stdlib.T_UInt256;
  const ctc7 = stdlib.T_Tuple([ctc5, ctc0, ctc6]);
  const ctc8 = stdlib.T_Data({
    a_admin_grant0_80: ctc4,
    arc200_transfer0_80: ctc7,
    nop0_80: ctc3,
    touch0_80: ctc3
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v430, v435, v437, v441] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc0, ctc1, ctc2]);
  const v474 = stdlib.protect(ctc3, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:110:23:application call to [unknown function] (defined at: ./index.rsh:110:23:function exp)', 'at ./index.rsh:51:31:application call to "runnop0_80" (defined at: ./index.rsh:110:12:function exp)', 'at ./index.rsh:51:31:application call to [unknown function] (defined at: ./index.rsh:51:31:function exp)'],
    msg: 'in',
    who: 'nop'
    });
  const v478 = ['nop0_80', v474];
  
  const txn1 = await (ctc.sendrecv({
    args: [v430, v435, v437, v441, v478],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:110:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v508], secs: v510, time: v509, didSend: v281, from: v507 } = txn1;
      
      switch (v508[0]) {
        case 'a_admin_grant0_80': {
          const v511 = v508[1];
          
          break;
          }
        case 'arc200_transfer0_80': {
          const v597 = v508[1];
          
          break;
          }
        case 'nop0_80': {
          const v683 = v508[1];
          sim_r.txns.push({
            kind: 'api',
            who: "nop"
            });
          ;
          const v746 = null;
          const v747 = await txn1.getOutput('nop', 'v746', ctc9, v746);
          
          const v1274 = v437;
          const v1276 = v441;
          sim_r.isHalt = false;
          
          break;
          }
        case 'touch0_80': {
          const v769 = v508[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc1, ctc2, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v508], secs: v510, time: v509, didSend: v281, from: v507 } = txn1;
  switch (v508[0]) {
    case 'a_admin_grant0_80': {
      const v511 = v508[1];
      return;
      break;
      }
    case 'arc200_transfer0_80': {
      const v597 = v508[1];
      return;
      break;
      }
    case 'nop0_80': {
      const v683 = v508[1];
      undefined /* setApiDetails */;
      ;
      const v746 = null;
      const v747 = await txn1.getOutput('nop', 'v746', ctc9, v746);
      if (v281) {
        stdlib.protect(ctc9, await interact.out(v683, v747), {
          at: './index.rsh:110:13:application',
          fs: ['at ./index.rsh:110:13:application call to [unknown function] (defined at: ./index.rsh:110:13:function exp)', 'at ./index.rsh:113:14:application call to "k" (defined at: ./index.rsh:112:15:function exp)', 'at ./index.rsh:112:15:application call to [unknown function] (defined at: ./index.rsh:112:15:function exp)'],
          msg: 'out',
          who: 'nop'
          });
        }
      else {
        }
      
      const v1274 = v437;
      const v1276 = v441;
      return;
      
      break;
      }
    case 'touch0_80': {
      const v769 = v508[1];
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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Object({
    manager: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_Tuple([ctc0]);
  const ctc5 = stdlib.T_Contract;
  const ctc6 = stdlib.T_UInt256;
  const ctc7 = stdlib.T_Tuple([ctc5, ctc0, ctc6]);
  const ctc8 = stdlib.T_Data({
    a_admin_grant0_80: ctc4,
    arc200_transfer0_80: ctc7,
    nop0_80: ctc3,
    touch0_80: ctc3
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v430, v435, v437, v441] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc0, ctc1, ctc2]);
  const v466 = stdlib.protect(ctc3, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:98:25:application call to [unknown function] (defined at: ./index.rsh:98:25:function exp)', 'at ./index.rsh:51:31:application call to "runtouch0_80" (defined at: ./index.rsh:98:12:function exp)', 'at ./index.rsh:51:31:application call to [unknown function] (defined at: ./index.rsh:51:31:function exp)'],
    msg: 'in',
    who: 'touch'
    });
  const v470 = ['touch0_80', v466];
  
  const txn1 = await (ctc.sendrecv({
    args: [v430, v435, v437, v441, v470],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:98:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v508], secs: v510, time: v509, didSend: v281, from: v507 } = txn1;
      
      switch (v508[0]) {
        case 'a_admin_grant0_80': {
          const v511 = v508[1];
          
          break;
          }
        case 'arc200_transfer0_80': {
          const v597 = v508[1];
          
          break;
          }
        case 'nop0_80': {
          const v683 = v508[1];
          
          break;
          }
        case 'touch0_80': {
          const v769 = v508[1];
          sim_r.txns.push({
            kind: 'api',
            who: "touch"
            });
          ;
          const v841 = (stdlib.le(await ctc.getBalance(), v441) ? stdlib.checkedBigNumberify('./index.rsh:101:41:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v441));
          const v842 = stdlib.safeAdd(v841, v441);
          const v843 = v437.manager;
          const v847 = stdlib.sub(v842, v841);
          sim_r.txns.push({
            kind: 'from',
            to: v843,
            tok: undefined /* Nothing */
            });
          const v848 = null;
          const v849 = await txn1.getOutput('touch', 'v848', ctc9, v848);
          
          const v1289 = v437;
          const v1291 = v847;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc1, ctc2, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v508], secs: v510, time: v509, didSend: v281, from: v507 } = txn1;
  switch (v508[0]) {
    case 'a_admin_grant0_80': {
      const v511 = v508[1];
      return;
      break;
      }
    case 'arc200_transfer0_80': {
      const v597 = v508[1];
      return;
      break;
      }
    case 'nop0_80': {
      const v683 = v508[1];
      return;
      break;
      }
    case 'touch0_80': {
      const v769 = v508[1];
      undefined /* setApiDetails */;
      ;
      const v841 = (stdlib.le(await ctc.getBalance(), v441) ? stdlib.checkedBigNumberify('./index.rsh:101:41:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v441));
      const v842 = stdlib.safeAdd(v841, v441);
      const v843 = v437.manager;
      const v847 = stdlib.sub(v842, v841);
      ;
      const v848 = null;
      const v849 = await txn1.getOutput('touch', 'v848', ctc9, v848);
      if (v281) {
        stdlib.protect(ctc9, await interact.out(v769, v849), {
          at: './index.rsh:98:13:application',
          fs: ['at ./index.rsh:98:13:application call to [unknown function] (defined at: ./index.rsh:98:13:function exp)', 'at ./index.rsh:103:14:application call to "k" (defined at: ./index.rsh:100:15:function exp)', 'at ./index.rsh:100:15:application call to [unknown function] (defined at: ./index.rsh:100:15:function exp)'],
          msg: 'out',
          who: 'touch'
          });
        }
      else {
        }
      
      const v1289 = v437;
      const v1291 = v847;
      return;
      
      break;
      }
    }
  
  
  };
export async function a_admin_grant(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for a_admin_grant expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for a_admin_grant expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _a_admin_grant3(ctcTop, interact);}
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
    impure: [`_reachp_0((uint64,(address)))void`, `_reachp_2((uint64,(byte,byte[72])))void`, `a_admin_grant(address)void`, `arc200_transfer(uint64,address,uint256)void`, `nop()void`, `touch()void`],
    pure: [`constructor()address`, `manager()address`, `state()(address)`, `supportsInterface(byte[4])byte`, `zeroAddress()address`],
    sigs: [`_reachp_0((uint64,(address)))void`, `_reachp_2((uint64,(byte,byte[72])))void`, `a_admin_grant(address)void`, `arc200_transfer(uint64,address,uint256)void`, `constructor()address`, `manager()address`, `nop()void`, `state()(address)`, `supportsInterface(byte[4])byte`, `touch()void`, `zeroAddress()address`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAEAAMBCCYCAAEAMRhBA3goZEkiWzUBJVs1AilkggsEBFIl0wQzbo1fBFIeLWEEWHWfogRcGeQxBGdDQDEEcV1g3QSkCuB0BKTjSc4E2FHeJwTjPYBSNhoAjgsDBAPFA3UDbwNyA2wC8AM3Aw8DSgN9ADQQMQASRCg1C4AIAAAAAAAAAg00C1CwNAs1BDQNVwEgMgY1DzUQNBI0EVA0EFA0DhZQIzIGNQI1ASlMVwBoZyg0ARY0AhZQZzEZIhJEiAOhNANAAAqABBUffHU0BFCwJEM0CyJbNRM0C1cIIDUNMQA0EBJEKDUMgAgAAAAAAAACeDQMULA0DDUEgAVhcHBJRDQTFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBgQayEDQTshiABNpwJbmyGjQNSbIcsho0C1coILIaNBOyMrMyCmA0CQk0ChcJFrcAPlcEAFA1DIAIAAAAAAAAAog0DFCwNAxJNQsiWzUMIjQMEkQyBjQONAwINQ41D0L/Gyg1C4AIAAAAAAAAAuo0C1CwNAs1BDIGNQ9C/v8yCmAyCngJNA4JSTUMNBCIAqooNQuACAAAAAAAAANQNAtQsDQLNQQyBjQMNA4INAwJNQ41D0L+xyWvKTQLUIEor1BQNQsjNAESRIgCUzQLIls1DDQLVwhJNQ2ABPmfKRU0DBZQNA1QsDQMiAJTNA0iVY0EAbYBuQHDAcZC/lolr4ABATQNFjQMUDQLUFBQNQtC/7I0ASMSRIgCBTQSNQQxGSISREL+hzQBIxJEiAHxNBA1BEL/6YBRAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQtC/zc0ASMSRIgBijQQNQRC/4I0ASMSRIgBeyk1BEL/dIBRAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQtC/sI0ASMSRIgBFTQRNQRC/w0xADUSNAwiWzUNNAxXCCA1C4AE3jrwoTQNFlA0C1CwNA2IAQo0CzURNBIyBiI1DjUPNRBC/TeIAO2BoI0GNAYINQY2GgE1DEL/togA2TYaATULQv5eNhoBNQtC/kkiMTQSRIECMTUSRCIxNhJEIjE3EkSIALGBaK8iIkL8/zYaARc2GgI2GgM1CzUMNQ1C/lxC/m4isgEkshCyB7IIs4lC/KU0DVcBSDULQvz8Qv2jQv28Qv5gQv5sQv7BNhoBNQtC/shC/tNIiUwJSTUGMgmIAFiJCUlB/+5JNQYxFjQAJAhJNQAJRwI4BzIKEkQ4ECQSRDgIEkSJMRmBBRJEiAA4IjIKMgmIADxC/IxC/uNJVwAgNRJJVyAgNRFJV0AgNRCBYFs1DokkNQOJsUL/ZUkiEkw0AhIRRIk0BjQHSg9B/4dC/4+xsglC/0k=`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `20`,
    1000: `466`,
    1001: `466`,
    1002: `467`,
    1003: `467`,
    1004: `468`,
    1005: `468`,
    1006: `468`,
    1007: `470`,
    1008: `470`,
    1009: `470`,
    101: `20`,
    1010: `472`,
    1011: `473`,
    1012: `475`,
    1013: `476`,
    1014: `477`,
    1015: `478`,
    1016: `478`,
    1017: `479`,
    1018: `479`,
    1019: `480`,
    102: `20`,
    1020: `480`,
    1021: `480`,
    1022: `481`,
    1023: `483`,
    1024: `484`,
    1025: `485`,
    1026: `485`,
    1027: `485`,
    1028: `486`,
    1029: `487`,
    103: `20`,
    1030: `487`,
    1031: `490`,
    1032: `490`,
    1033: `491`,
    1034: `491`,
    1035: `492`,
    1036: `493`,
    1037: `494`,
    1038: `495`,
    1039: `495`,
    104: `20`,
    1040: `496`,
    1041: `497`,
    1042: `497`,
    1043: `498`,
    1044: `498`,
    1045: `499`,
    1046: `499`,
    1047: `500`,
    1048: `501`,
    1049: `502`,
    105: `20`,
    1050: `502`,
    1051: `503`,
    1052: `504`,
    1053: `505`,
    1054: `506`,
    1055: `506`,
    1056: `507`,
    1057: `508`,
    1058: `509`,
    1059: `511`,
    106: `20`,
    1060: `511`,
    1061: `512`,
    1062: `512`,
    1063: `513`,
    1064: `514`,
    1065: `516`,
    1066: `516`,
    1067: `516`,
    1068: `518`,
    1069: `519`,
    107: `20`,
    1070: `519`,
    1071: `520`,
    1072: `520`,
    1073: `521`,
    1074: `521`,
    1075: `521`,
    1076: `522`,
    1077: `522`,
    1078: `522`,
    1079: `524`,
    108: `20`,
    1080: `524`,
    1081: `524`,
    1082: `526`,
    1083: `527`,
    1084: `527`,
    1085: `527`,
    1086: `528`,
    1087: `528`,
    1088: `529`,
    1089: `530`,
    109: `20`,
    1090: `530`,
    1091: `530`,
    1092: `531`,
    1093: `531`,
    1094: `532`,
    1095: `533`,
    1096: `533`,
    1097: `533`,
    1098: `534`,
    1099: `534`,
    11: `2`,
    110: `20`,
    1100: `535`,
    1101: `535`,
    1102: `536`,
    1103: `537`,
    1104: `537`,
    1105: `538`,
    1106: `540`,
    1107: `541`,
    1108: `541`,
    1109: `542`,
    111: `20`,
    1110: `544`,
    1111: `545`,
    1112: `545`,
    1113: `545`,
    1114: `547`,
    1115: `548`,
    1116: `549`,
    1117: `550`,
    1118: `551`,
    1119: `551`,
    112: `20`,
    1120: `552`,
    1121: `553`,
    1122: `554`,
    1123: `555`,
    1124: `557`,
    1125: `557`,
    1126: `558`,
    1127: `558`,
    1128: `559`,
    1129: `560`,
    113: `20`,
    1130: `561`,
    1131: `561`,
    1132: `561`,
    1133: `562`,
    1134: `562`,
    1135: `562`,
    1136: `564`,
    1137: `565`,
    1138: `565`,
    1139: `566`,
    114: `22`,
    115: `24`,
    116: `24`,
    117: `25`,
    118: `25`,
    119: `26`,
    12: `4`,
    120: `27`,
    121: `32`,
    122: `33`,
    123: `33`,
    124: `34`,
    125: `34`,
    126: `34`,
    127: `34`,
    128: `34`,
    129: `34`,
    13: `4`,
    130: `34`,
    131: `34`,
    132: `34`,
    133: `34`,
    134: `35`,
    135: `35`,
    136: `36`,
    137: `37`,
    138: `38`,
    139: `38`,
    14: `5`,
    140: `39`,
    141: `39`,
    142: `40`,
    143: `40`,
    144: `41`,
    145: `41`,
    146: `41`,
    147: `42`,
    148: `42`,
    149: `43`,
    15: `5`,
    150: `43`,
    151: `44`,
    152: `44`,
    153: `47`,
    154: `47`,
    155: `48`,
    156: `48`,
    157: `49`,
    158: `50`,
    159: `50`,
    16: `5`,
    160: `51`,
    161: `52`,
    162: `52`,
    163: `53`,
    164: `54`,
    165: `55`,
    166: `56`,
    167: `56`,
    168: `58`,
    169: `58`,
    17: `6`,
    170: `59`,
    171: `59`,
    172: `60`,
    173: `61`,
    174: `62`,
    175: `62`,
    176: `62`,
    177: `63`,
    178: `64`,
    179: `65`,
    18: `7`,
    180: `65`,
    181: `66`,
    182: `67`,
    183: `67`,
    184: `68`,
    185: `69`,
    186: `70`,
    187: `71`,
    188: `71`,
    189: `72`,
    19: `8`,
    190: `73`,
    191: `74`,
    192: `76`,
    193: `76`,
    194: `76`,
    195: `78`,
    196: `78`,
    197: `79`,
    198: `79`,
    199: `79`,
    2: `2`,
    20: `9`,
    200: `81`,
    201: `81`,
    202: `81`,
    203: `81`,
    204: `81`,
    205: `81`,
    206: `82`,
    207: `82`,
    208: `83`,
    209: `84`,
    21: `10`,
    210: `86`,
    211: `87`,
    212: `89`,
    213: `89`,
    214: `90`,
    215: `91`,
    216: `92`,
    217: `92`,
    218: `93`,
    219: `93`,
    22: `11`,
    220: `94`,
    221: `94`,
    222: `94`,
    223: `95`,
    224: `95`,
    225: `96`,
    226: `96`,
    227: `97`,
    228: `97`,
    229: `98`,
    23: `11`,
    230: `99`,
    231: `104`,
    232: `105`,
    233: `105`,
    234: `106`,
    235: `106`,
    236: `106`,
    237: `106`,
    238: `106`,
    239: `106`,
    24: `12`,
    240: `106`,
    241: `106`,
    242: `106`,
    243: `106`,
    244: `107`,
    245: `107`,
    246: `108`,
    247: `109`,
    248: `110`,
    249: `110`,
    25: `13`,
    250: `111`,
    251: `111`,
    252: `112`,
    253: `112`,
    254: `112`,
    255: `112`,
    256: `112`,
    257: `112`,
    258: `112`,
    259: `113`,
    26: `14`,
    260: `113`,
    261: `114`,
    262: `115`,
    263: `116`,
    264: `117`,
    265: `117`,
    266: `118`,
    267: `118`,
    268: `119`,
    269: `120`,
    27: `14`,
    270: `120`,
    271: `121`,
    272: `122`,
    273: `122`,
    274: `123`,
    275: `124`,
    276: `124`,
    277: `125`,
    278: `126`,
    279: `127`,
    28: `15`,
    280: `127`,
    281: `128`,
    282: `129`,
    283: `130`,
    284: `130`,
    285: `131`,
    286: `131`,
    287: `132`,
    288: `132`,
    289: `133`,
    29: `16`,
    290: `133`,
    291: `135`,
    292: `135`,
    293: `136`,
    294: `136`,
    295: `136`,
    296: `136`,
    297: `136`,
    298: `136`,
    299: `137`,
    3: `2`,
    30: `18`,
    300: `137`,
    301: `138`,
    302: `138`,
    303: `140`,
    304: `141`,
    305: `141`,
    306: `142`,
    307: `142`,
    308: `143`,
    309: `143`,
    31: `18`,
    310: `144`,
    311: `144`,
    312: `144`,
    313: `145`,
    314: `145`,
    315: `148`,
    316: `148`,
    317: `149`,
    318: `149`,
    319: `150`,
    32: `18`,
    320: `155`,
    321: `155`,
    322: `156`,
    323: `157`,
    324: `157`,
    325: `158`,
    326: `159`,
    327: `159`,
    328: `160`,
    329: `161`,
    33: `18`,
    330: `162`,
    331: `163`,
    332: `163`,
    333: `163`,
    334: `164`,
    335: `164`,
    336: `164`,
    337: `165`,
    338: `166`,
    339: `166`,
    34: `18`,
    340: `167`,
    341: `167`,
    342: `167`,
    343: `167`,
    344: `167`,
    345: `167`,
    346: `167`,
    347: `167`,
    348: `167`,
    349: `167`,
    35: `18`,
    350: `168`,
    351: `168`,
    352: `169`,
    353: `170`,
    354: `171`,
    355: `171`,
    356: `172`,
    357: `173`,
    358: `173`,
    359: `174`,
    36: `18`,
    360: `175`,
    361: `176`,
    362: `176`,
    363: `177`,
    364: `178`,
    365: `178`,
    366: `179`,
    367: `180`,
    368: `185`,
    369: `185`,
    37: `18`,
    370: `186`,
    371: `186`,
    372: `187`,
    373: `187`,
    374: `188`,
    375: `189`,
    376: `189`,
    377: `190`,
    378: `190`,
    379: `191`,
    38: `18`,
    380: `191`,
    381: `191`,
    382: `193`,
    383: `194`,
    384: `194`,
    385: `195`,
    386: `195`,
    387: `195`,
    388: `195`,
    389: `195`,
    39: `18`,
    390: `195`,
    391: `195`,
    392: `195`,
    393: `195`,
    394: `195`,
    395: `196`,
    396: `196`,
    397: `197`,
    398: `198`,
    399: `199`,
    4: `2`,
    40: `18`,
    400: `199`,
    401: `200`,
    402: `200`,
    403: `201`,
    404: `201`,
    405: `202`,
    406: `202`,
    407: `203`,
    408: `203`,
    409: `203`,
    41: `18`,
    410: `205`,
    411: `205`,
    412: `206`,
    413: `207`,
    414: `207`,
    415: `208`,
    416: `209`,
    417: `210`,
    418: `210`,
    419: `211`,
    42: `18`,
    420: `213`,
    421: `214`,
    422: `214`,
    423: `216`,
    424: `216`,
    425: `217`,
    426: `217`,
    427: `217`,
    428: `218`,
    429: `219`,
    43: `18`,
    430: `219`,
    431: `220`,
    432: `220`,
    433: `220`,
    434: `220`,
    435: `220`,
    436: `220`,
    437: `220`,
    438: `220`,
    439: `220`,
    44: `18`,
    440: `220`,
    441: `221`,
    442: `221`,
    443: `222`,
    444: `223`,
    445: `224`,
    446: `224`,
    447: `225`,
    448: `225`,
    449: `226`,
    45: `18`,
    450: `226`,
    451: `227`,
    452: `227`,
    453: `228`,
    454: `228`,
    455: `229`,
    456: `230`,
    457: `230`,
    458: `231`,
    459: `232`,
    46: `18`,
    460: `232`,
    461: `233`,
    462: `233`,
    463: `234`,
    464: `234`,
    465: `234`,
    466: `236`,
    467: `237`,
    468: `238`,
    469: `239`,
    47: `18`,
    470: `239`,
    471: `240`,
    472: `241`,
    473: `241`,
    474: `242`,
    475: `243`,
    476: `244`,
    477: `245`,
    478: `245`,
    479: `247`,
    48: `18`,
    480: `248`,
    481: `248`,
    482: `249`,
    483: `250`,
    484: `251`,
    485: `251`,
    486: `251`,
    487: `252`,
    488: `252`,
    489: `253`,
    49: `18`,
    490: `254`,
    491: `255`,
    492: `255`,
    493: `256`,
    494: `256`,
    495: `257`,
    496: `257`,
    497: `257`,
    498: `258`,
    499: `258`,
    5: `2`,
    50: `18`,
    500: `259`,
    501: `259`,
    502: `259`,
    503: `259`,
    504: `259`,
    505: `259`,
    506: `260`,
    507: `260`,
    508: `261`,
    509: `262`,
    51: `18`,
    510: `263`,
    511: `263`,
    512: `264`,
    513: `265`,
    514: `267`,
    515: `267`,
    516: `268`,
    517: `268`,
    518: `268`,
    519: `269`,
    52: `18`,
    520: `269`,
    521: `270`,
    522: `271`,
    523: `272`,
    524: `272`,
    525: `272`,
    526: `272`,
    527: `272`,
    528: `272`,
    529: `272`,
    53: `18`,
    530: `272`,
    531: `272`,
    532: `272`,
    533: `273`,
    534: `273`,
    535: `273`,
    536: `275`,
    537: `276`,
    538: `277`,
    539: `277`,
    54: `18`,
    540: `277`,
    541: `278`,
    542: `278`,
    543: `279`,
    544: `280`,
    545: `280`,
    546: `281`,
    547: `282`,
    548: `282`,
    549: `283`,
    55: `18`,
    550: `284`,
    551: `285`,
    552: `286`,
    553: `286`,
    554: `287`,
    555: `287`,
    556: `287`,
    557: `289`,
    558: `289`,
    559: `290`,
    56: `18`,
    560: `291`,
    561: `292`,
    562: `295`,
    563: `295`,
    564: `295`,
    565: `296`,
    566: `296`,
    567: `297`,
    568: `297`,
    569: `299`,
    57: `18`,
    570: `299`,
    571: `300`,
    572: `301`,
    573: `302`,
    574: `304`,
    575: `304`,
    576: `304`,
    577: `306`,
    578: `306`,
    579: `307`,
    58: `18`,
    580: `308`,
    581: `309`,
    582: `312`,
    583: `312`,
    584: `312`,
    585: `313`,
    586: `313`,
    587: `314`,
    588: `314`,
    589: `315`,
    59: `18`,
    590: `315`,
    591: `315`,
    592: `317`,
    593: `317`,
    594: `317`,
    595: `317`,
    596: `317`,
    597: `317`,
    598: `317`,
    599: `317`,
    6: `2`,
    60: `18`,
    600: `317`,
    601: `317`,
    602: `317`,
    603: `317`,
    604: `317`,
    605: `317`,
    606: `317`,
    607: `317`,
    608: `317`,
    609: `317`,
    61: `18`,
    610: `317`,
    611: `317`,
    612: `317`,
    613: `317`,
    614: `317`,
    615: `317`,
    616: `317`,
    617: `317`,
    618: `317`,
    619: `317`,
    62: `18`,
    620: `317`,
    621: `317`,
    622: `317`,
    623: `317`,
    624: `317`,
    625: `317`,
    626: `317`,
    627: `317`,
    628: `317`,
    629: `317`,
    63: `18`,
    630: `317`,
    631: `317`,
    632: `317`,
    633: `317`,
    634: `317`,
    635: `317`,
    636: `317`,
    637: `317`,
    638: `317`,
    639: `317`,
    64: `18`,
    640: `317`,
    641: `317`,
    642: `317`,
    643: `317`,
    644: `317`,
    645: `317`,
    646: `317`,
    647: `317`,
    648: `317`,
    649: `317`,
    65: `18`,
    650: `317`,
    651: `317`,
    652: `317`,
    653: `317`,
    654: `317`,
    655: `317`,
    656: `317`,
    657: `317`,
    658: `317`,
    659: `317`,
    66: `18`,
    660: `317`,
    661: `317`,
    662: `317`,
    663: `317`,
    664: `317`,
    665: `317`,
    666: `317`,
    667: `317`,
    668: `317`,
    669: `317`,
    67: `18`,
    670: `317`,
    671: `317`,
    672: `317`,
    673: `317`,
    674: `317`,
    675: `318`,
    676: `318`,
    677: `319`,
    678: `319`,
    679: `319`,
    68: `18`,
    680: `321`,
    681: `321`,
    682: `322`,
    683: `323`,
    684: `324`,
    685: `327`,
    686: `327`,
    687: `327`,
    688: `328`,
    689: `328`,
    69: `18`,
    690: `329`,
    691: `329`,
    692: `330`,
    693: `330`,
    694: `330`,
    695: `332`,
    696: `332`,
    697: `333`,
    698: `334`,
    699: `335`,
    7: `2`,
    70: `18`,
    700: `338`,
    701: `338`,
    702: `338`,
    703: `339`,
    704: `340`,
    705: `340`,
    706: `341`,
    707: `341`,
    708: `341`,
    709: `343`,
    71: `18`,
    710: `343`,
    711: `343`,
    712: `343`,
    713: `343`,
    714: `343`,
    715: `343`,
    716: `343`,
    717: `343`,
    718: `343`,
    719: `343`,
    72: `18`,
    720: `343`,
    721: `343`,
    722: `343`,
    723: `343`,
    724: `343`,
    725: `343`,
    726: `343`,
    727: `343`,
    728: `343`,
    729: `343`,
    73: `18`,
    730: `343`,
    731: `343`,
    732: `343`,
    733: `343`,
    734: `343`,
    735: `343`,
    736: `343`,
    737: `343`,
    738: `343`,
    739: `343`,
    74: `18`,
    740: `343`,
    741: `343`,
    742: `343`,
    743: `343`,
    744: `343`,
    745: `343`,
    746: `343`,
    747: `343`,
    748: `343`,
    749: `343`,
    75: `18`,
    750: `343`,
    751: `343`,
    752: `343`,
    753: `343`,
    754: `343`,
    755: `343`,
    756: `343`,
    757: `343`,
    758: `343`,
    759: `343`,
    76: `18`,
    760: `343`,
    761: `343`,
    762: `343`,
    763: `343`,
    764: `343`,
    765: `343`,
    766: `343`,
    767: `343`,
    768: `343`,
    769: `343`,
    77: `18`,
    770: `343`,
    771: `343`,
    772: `343`,
    773: `343`,
    774: `343`,
    775: `343`,
    776: `343`,
    777: `343`,
    778: `343`,
    779: `343`,
    78: `18`,
    780: `343`,
    781: `343`,
    782: `343`,
    783: `343`,
    784: `343`,
    785: `343`,
    786: `343`,
    787: `343`,
    788: `343`,
    789: `343`,
    79: `18`,
    790: `343`,
    791: `343`,
    792: `344`,
    793: `344`,
    794: `345`,
    795: `345`,
    796: `345`,
    797: `347`,
    798: `347`,
    799: `348`,
    8: `2`,
    80: `18`,
    800: `349`,
    801: `350`,
    802: `353`,
    803: `353`,
    804: `353`,
    805: `354`,
    806: `354`,
    807: `355`,
    808: `355`,
    809: `356`,
    81: `18`,
    810: `356`,
    811: `356`,
    812: `358`,
    813: `358`,
    814: `359`,
    815: `359`,
    816: `360`,
    817: `360`,
    818: `361`,
    819: `362`,
    82: `18`,
    820: `363`,
    821: `363`,
    822: `364`,
    823: `364`,
    824: `365`,
    825: `365`,
    826: `365`,
    827: `366`,
    828: `366`,
    829: `367`,
    83: `18`,
    830: `367`,
    831: `367`,
    832: `367`,
    833: `367`,
    834: `367`,
    835: `368`,
    836: `368`,
    837: `369`,
    838: `370`,
    839: `371`,
    84: `18`,
    840: `371`,
    841: `372`,
    842: `373`,
    843: `375`,
    844: `375`,
    845: `376`,
    846: `376`,
    847: `376`,
    848: `377`,
    849: `377`,
    85: `18`,
    850: `378`,
    851: `378`,
    852: `379`,
    853: `379`,
    854: `380`,
    855: `380`,
    856: `381`,
    857: `382`,
    858: `382`,
    859: `383`,
    86: `18`,
    860: `383`,
    861: `384`,
    862: `384`,
    863: `385`,
    864: `385`,
    865: `385`,
    866: `387`,
    867: `387`,
    868: `387`,
    869: `388`,
    87: `19`,
    870: `388`,
    871: `388`,
    872: `388`,
    873: `390`,
    874: `390`,
    875: `391`,
    876: `392`,
    877: `392`,
    878: `393`,
    879: `393`,
    88: `19`,
    880: `393`,
    881: `394`,
    882: `394`,
    883: `395`,
    884: `395`,
    885: `395`,
    886: `397`,
    887: `397`,
    888: `397`,
    889: `398`,
    89: `19`,
    890: `398`,
    891: `398`,
    892: `399`,
    893: `399`,
    894: `400`,
    895: `400`,
    896: `400`,
    897: `402`,
    898: `402`,
    899: `402`,
    9: `2`,
    90: `20`,
    900: `403`,
    901: `403`,
    902: `404`,
    903: `404`,
    904: `404`,
    905: `406`,
    906: `407`,
    907: `407`,
    908: `408`,
    909: `409`,
    91: `20`,
    910: `410`,
    911: `410`,
    912: `411`,
    913: `411`,
    914: `412`,
    915: `413`,
    916: `414`,
    917: `415`,
    918: `415`,
    919: `416`,
    92: `20`,
    920: `417`,
    921: `418`,
    922: `419`,
    923: `419`,
    924: `420`,
    925: `421`,
    926: `422`,
    927: `422`,
    928: `422`,
    929: `423`,
    93: `20`,
    930: `423`,
    931: `424`,
    932: `425`,
    933: `426`,
    934: `427`,
    935: `427`,
    936: `427`,
    937: `429`,
    938: `429`,
    939: `429`,
    94: `20`,
    940: `430`,
    941: `431`,
    942: `431`,
    943: `431`,
    944: `432`,
    945: `432`,
    946: `432`,
    947: `433`,
    948: `433`,
    949: `434`,
    95: `20`,
    950: `434`,
    951: `435`,
    952: `435`,
    953: `436`,
    954: `436`,
    955: `436`,
    956: `438`,
    957: `438`,
    958: `438`,
    959: `440`,
    96: `20`,
    960: `441`,
    961: `441`,
    962: `442`,
    963: `443`,
    964: `443`,
    965: `444`,
    966: `444`,
    967: `445`,
    968: `445`,
    969: `446`,
    97: `20`,
    970: `447`,
    971: `449`,
    972: `449`,
    973: `449`,
    974: `451`,
    975: `451`,
    976: `452`,
    977: `452`,
    978: `452`,
    979: `453`,
    98: `20`,
    980: `453`,
    981: `454`,
    982: `454`,
    983: `454`,
    984: `456`,
    985: `456`,
    986: `456`,
    987: `458`,
    988: `458`,
    989: `458`,
    99: `20`,
    990: `460`,
    991: `460`,
    992: `460`,
    993: `462`,
    994: `462`,
    995: `462`,
    996: `464`,
    997: `464`,
    998: `464`,
    999: `466`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 0,
  stateKeys: 1,
  stateSize: 104,
  unsupported: [],
  version: 13,
  warnings: [`Step 2 calls a remote object at /app/index.rsh:76:15:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:130:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:51:31:after expr stmt semicolon',
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
  "a_admin_grant": a_admin_grant,
  "arc200_transfer": arc200_transfer,
  "nop": nop,
  "touch": touch
  };
export const _APIs = {
  a_admin: {
    grant: a_admin_grant
    },
  arc200_transfer: arc200_transfer,
  nop: nop,
  touch: touch
  };

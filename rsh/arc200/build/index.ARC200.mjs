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
      const [v1891, v1892, v1893, v1896, v1899, v1910, v1912, v1916] = svs;
      return (await ((async (_v1936, _v1937 ) => {
          const v1936 = stdlib.protect(ctc0, _v1936, null);
          const v1937 = stdlib.protect(ctc0, _v1937, null);
        
        const v1938 = [v1936, v1937];
        const v1939 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc12, v1938, ctc4), null);
        const v1940 = stdlib.fromSome(v1939, stdlib.checkedBigNumberify('./index.rsh:181:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        
        return v1940;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc200_balanceOf = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1891, v1892, v1893, v1896, v1899, v1910, v1912, v1916] = svs;
      return (await ((async (_v1933 ) => {
          const v1933 = stdlib.protect(ctc0, _v1933, null);
        
        const v1934 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc0, v1933, ctc4), null);
        const v1935 = stdlib.fromSome(v1934, stdlib.checkedBigNumberify('./index.rsh:175:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        
        return v1935;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc200_decimals = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1891, v1892, v1893, v1896, v1899, v1910, v1912, v1916] = svs;
      return (await ((async () => {
        
        
        return v1899;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc200_name = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1891, v1892, v1893, v1896, v1899, v1910, v1912, v1916] = svs;
      return (await ((async () => {
        
        const v1906 = v1893.name;
        
        return v1906;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc200_symbol = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1891, v1892, v1893, v1896, v1899, v1910, v1912, v1916] = svs;
      return (await ((async () => {
        
        const v1907 = v1893.symbol;
        
        return v1907;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _arc200_totalSupply = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1891, v1892, v1893, v1896, v1899, v1910, v1912, v1916] = svs;
      return (await ((async () => {
        
        
        return v1896;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _constructor = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1891, v1892, v1893, v1896, v1899, v1910, v1912, v1916] = svs;
      return (await ((async () => {
        
        
        return v1892;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _hasBox = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1891, v1892, v1893, v1896, v1899, v1910, v1912, v1916] = svs;
      return (await ((async (_v1919 ) => {
          const v1919 = stdlib.protect(ctc13, _v1919, null);
        
        let v1924;
        switch (v1919[0]) {
          case 'Allowance': {
            const v1925 = v1919[1];
            const v1926 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc12, v1925, ctc4), null);
            const v1927 = {
              None: 0,
              Some: 1
              }[v1926[0]];
            const v1928 = stdlib.eq(v1927, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
            v1924 = v1928;
            
            break;
            }
          case 'Balance': {
            const v1929 = v1919[1];
            const v1930 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc0, v1929, ctc4), null);
            const v1931 = {
              None: 0,
              Some: 1
              }[v1930[0]];
            const v1932 = stdlib.eq(v1931, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
            v1924 = v1932;
            
            break;
            }
          }
        
        return v1924;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _manager = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1891, v1892, v1893, v1896, v1899, v1910, v1912, v1916] = svs;
      return (await ((async () => {
        
        const v1946 = v1912.manager;
        
        return v1946;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _state = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1891, v1892, v1893, v1896, v1899, v1910, v1912, v1916] = svs;
      return (await ((async () => {
        
        const v1941 = v1912.manager;
        const v1942 = v1912.registered;
        const v1943 = v1912.keyInfo;
        const v1944 = {
          keyInfo: v1943,
          manager: v1941,
          registered: v1942
          };
        
        return v1944;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _supportsInterface = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1891, v1892, v1893, v1896, v1899, v1910, v1912, v1916] = svs;
      return (await ((async (_v1947 ) => {
          const v1947 = stdlib.protect(ctc15, _v1947, null);
        
        const v1948 = stdlib.bytesFromHex("0xc7bea040");
        const v1950 = stdlib.digest([ctc15], [v1948]);
        const v1951 = stdlib.digest([ctc15], [v1947]);
        const v1952 = stdlib.digestEq(v1950, v1951);
        
        return v1952;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _zeroAddress = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1891, v1892, v1893, v1896, v1899, v1910, v1912, v1916] = svs;
      return (await ((async () => {
        
        
        return v1891;}))(...args));
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
  
  
  const v1871 = stdlib.protect(ctc8, interact.params, 'for Deployer\'s interact field params');
  const v1872 = v1871.manager;
  const v1873 = v1871.meta;
  const v1874 = v1871.zeroAddress;
  const v1875 = v1873.decimals;
  const v1878 = v1873.totalSupply;
  
  const v1885 = stdlib.gt256(v1878, stdlib.checkedBigNumberify('./index.rsh:131:34:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v1885, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:130:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Total supply must be greater than zero',
    who: 'Deployer'
    });
  const v1888 = stdlib.le(v1875, stdlib.checkedBigNumberify('./index.rsh:28:22:decimal', stdlib.UInt_max, '256'));
  stdlib.assert(v1888, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:134:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Decimals must be less than 256',
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1874, v1872, v1873],
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
      
      const {data: [v1891, v1892, v1893], secs: v1895, time: v1894, didSend: v108, from: v1890 } = txn1;
      
      const v1896 = v1893.totalSupply;
      const v1899 = v1893.decimals;
      ;
      await stdlib.simMapSet(sim_r, 0, ctc3, v1892, ctc1, v1896);
      await stdlib.simMapSet(sim_r, 0, ctc3, v1891, ctc1, stdlib.checkedBigNumberify('./index.rsh:144:35:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      null;
      const v1904 = await ctc.getContractInfo();
      
      const v1910 = ['None', null];
      const v1911 = {
        keyInfo: v1910,
        manager: v1892,
        registered: false
        };
      const v1912 = v1911;
      const v1913 = v1894;
      const v1916 = stdlib.checkedBigNumberify('./index.rsh:124:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
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
  const {data: [v1891, v1892, v1893], secs: v1895, time: v1894, didSend: v108, from: v1890 } = txn1;
  const v1896 = v1893.totalSupply;
  const v1897 = stdlib.gt256(v1896, stdlib.checkedBigNumberify('./index.rsh:131:34:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  stdlib.assert(v1897, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:130:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Total supply must be greater than zero',
    who: 'Deployer'
    });
  const v1899 = v1893.decimals;
  const v1900 = stdlib.le(v1899, stdlib.checkedBigNumberify('./index.rsh:28:22:decimal', stdlib.UInt_max, '256'));
  stdlib.assert(v1900, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:134:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'ARC200: Decimals must be less than 256',
    who: 'Deployer'
    });
  ;
  await stdlib.mapSet(map0, ctc3, v1892, ctc1, v1896);
  await stdlib.mapSet(map0, ctc3, v1891, ctc1, stdlib.checkedBigNumberify('./index.rsh:144:35:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  null;
  const v1904 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.ready(v1904), {
    at: './index.rsh:148:19:application',
    fs: ['at ./index.rsh:148:19:application call to [unknown function] (defined at: ./index.rsh:148:19:function exp)', 'at ./index.rsh:148:19:application call to "liftedInteract" (defined at: ./index.rsh:148:19:application)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  const v1910 = ['None', null];
  const v1911 = {
    keyInfo: v1910,
    manager: v1892,
    registered: false
    };
  let v1912 = v1911;
  let v1913 = v1894;
  let v1916 = stdlib.checkedBigNumberify('./index.rsh:124:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
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
    const {data: [v2184], secs: v2186, time: v2185, didSend: v1321, from: v2183 } = txn3;
    switch (v2184[0]) {
      case 'arc200_approve0_273': {
        const v2187 = v2184[1];
        undefined /* setApiDetails */;
        ;
        const v2223 = v2187[stdlib.checkedBigNumberify('./index.rsh:258:10:spread', stdlib.UInt_max, '0')];
        const v2224 = v2187[stdlib.checkedBigNumberify('./index.rsh:258:10:spread', stdlib.UInt_max, '1')];
        const v2225 = stdlib.addressEq(v2183, v1891);
        const v2226 = v2225 ? false : true;
        stdlib.assert(v2226, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:259:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:262:13:application call to [unknown function] (defined at: ./index.rsh:262:13:function exp)'],
          msg: 'ARC200: Approve this to zero address',
          who: 'Deployer'
          });
        const v2228 = stdlib.addressEq(v2223, v1891);
        const v2229 = v2228 ? false : true;
        stdlib.assert(v2229, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:260:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:262:13:application call to [unknown function] (defined at: ./index.rsh:262:13:function exp)'],
          msg: 'ARC200: Approve to zero address',
          who: 'Deployer'
          });
        const v2233 = [v2183, v2223];
        await stdlib.mapSet(map1, ctc11, v2233, ctc1, v2224);
        null;
        const v2234 = true;
        await txn3.getOutput('arc200_approve', 'v2234', ctc17, v2234);
        const cv1912 = v1912;
        const cv1913 = v2185;
        const cv1916 = v1916;
        
        v1912 = cv1912;
        v1913 = cv1913;
        v1916 = cv1916;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'arc200_transfer0_273': {
        const v2483 = v2184[1];
        undefined /* setApiDetails */;
        ;
        const v2540 = v2483[stdlib.checkedBigNumberify('./index.rsh:218:10:spread', stdlib.UInt_max, '0')];
        const v2541 = v2483[stdlib.checkedBigNumberify('./index.rsh:218:10:spread', stdlib.UInt_max, '1')];
        const v2543 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2183, ctc1), null);
        const v2544 = stdlib.fromSome(v2543, stdlib.checkedBigNumberify('./index.rsh:175:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2545 = stdlib.ge256(v2544, v2541);
        stdlib.assert(v2545, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:210:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:219:18:application call to "chkTransfer" (defined at: ./index.rsh:209:48:function exp)', 'at ./index.rsh:221:13:application call to [unknown function] (defined at: ./index.rsh:221:13:function exp)'],
          msg: 'ARC200: Transfer amount must not be greater than balance',
          who: 'Deployer'
          });
        const v2549 = true;
        await txn3.getOutput('arc200_transfer', 'v2549', ctc17, v2549);
        const v2559 = stdlib.safeSub256(v2544, v2541);
        await stdlib.mapSet(map0, ctc3, v2183, ctc1, v2559);
        const v2560 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2540, ctc1), null);
        const v2561 = stdlib.fromSome(v2560, stdlib.checkedBigNumberify('./index.rsh:175:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2562 = stdlib.safeAdd256(v2561, v2541);
        await stdlib.mapSet(map0, ctc3, v2540, ctc1, v2562);
        null;
        const cv1912 = v1912;
        const cv1913 = v2185;
        const cv1916 = v1916;
        
        v1912 = cv1912;
        v1913 = cv1913;
        v1916 = cv1916;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'arc200_transferFrom0_273': {
        const v2779 = v2184[1];
        undefined /* setApiDetails */;
        ;
        const v2862 = v2779[stdlib.checkedBigNumberify('./index.rsh:244:10:spread', stdlib.UInt_max, '0')];
        const v2863 = v2779[stdlib.checkedBigNumberify('./index.rsh:244:10:spread', stdlib.UInt_max, '1')];
        const v2864 = v2779[stdlib.checkedBigNumberify('./index.rsh:244:10:spread', stdlib.UInt_max, '2')];
        const v2866 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2862, ctc1), null);
        const v2867 = stdlib.fromSome(v2866, stdlib.checkedBigNumberify('./index.rsh:175:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2868 = stdlib.ge256(v2867, v2864);
        stdlib.assert(v2868, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:230:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:245:22:application call to "chkTransferFrom" (defined at: ./index.rsh:229:62:function exp)', 'at ./index.rsh:247:13:application call to [unknown function] (defined at: ./index.rsh:247:13:function exp)'],
          msg: 'ARC200: Amount must not be greater than balance',
          who: 'Deployer'
          });
        const v2870 = [v2862, v2183];
        const v2871 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc11, v2870, ctc1), null);
        const v2872 = stdlib.fromSome(v2871, stdlib.checkedBigNumberify('./index.rsh:181:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2873 = stdlib.ge256(v2872, v2864);
        stdlib.assert(v2873, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:234:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:245:22:application call to "chkTransferFrom" (defined at: ./index.rsh:229:62:function exp)', 'at ./index.rsh:247:13:application call to [unknown function] (defined at: ./index.rsh:247:13:function exp)'],
          msg: 'ARC200: Amount must not be greater than allowance',
          who: 'Deployer'
          });
        const v2880 = stdlib.safeSub256(v2867, v2864);
        await stdlib.mapSet(map0, ctc3, v2862, ctc1, v2880);
        const v2881 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2863, ctc1), null);
        const v2882 = stdlib.fromSome(v2881, stdlib.checkedBigNumberify('./index.rsh:175:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v2883 = stdlib.safeAdd256(v2882, v2864);
        await stdlib.mapSet(map0, ctc3, v2863, ctc1, v2883);
        null;
        const v2888 = stdlib.safeSub256(v2872, v2864);
        await stdlib.mapSet(map1, ctc11, v2870, ctc1, v2888);
        null;
        const v2891 = true;
        await txn3.getOutput('arc200_transferFrom', 'v2891', ctc17, v2891);
        const cv1912 = v1912;
        const cv1913 = v2185;
        const cv1916 = v1916;
        
        v1912 = cv1912;
        v1913 = cv1913;
        v1916 = cv1916;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'createAllowanceBox0_273': {
        const v3075 = v2184[1];
        undefined /* setApiDetails */;
        ;
        const v3198 = v3075[stdlib.checkedBigNumberify('./index.rsh:284:10:spread', stdlib.UInt_max, '0')];
        const v3199 = v3075[stdlib.checkedBigNumberify('./index.rsh:284:10:spread', stdlib.UInt_max, '1')];
        const v3200 = [v3198, v3199];
        const v3201 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc11, v3200, ctc1), null);
        const v3202 = {
          None: 0,
          Some: 1
          }[v3201[0]];
        const v3203 = stdlib.eq(v3202, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v3203, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:285:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:290:13:application call to [unknown function] (defined at: ./index.rsh:290:13:function exp)'],
          msg: 'ARC200: Allowance box already exists',
          who: 'Deployer'
          });
        await stdlib.mapSet(map1, ctc11, v3200, ctc1, stdlib.checkedBigNumberify('./index.rsh:291:50:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v3208 = true;
        await txn3.getOutput('createAllowanceBox', 'v3208', ctc17, v3208);
        const cv1912 = v1912;
        const cv1913 = v2185;
        const cv1916 = v1916;
        
        v1912 = cv1912;
        v1913 = cv1913;
        v1916 = cv1916;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'createBalanceBox0_273': {
        const v3371 = v2184[1];
        undefined /* setApiDetails */;
        ;
        const v3514 = v3371[stdlib.checkedBigNumberify('./index.rsh:272:10:spread', stdlib.UInt_max, '0')];
        const v3515 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v3514, ctc1), null);
        const v3516 = {
          None: 0,
          Some: 1
          }[v3515[0]];
        const v3517 = stdlib.eq(v3516, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v3517, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:273:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:275:13:application call to [unknown function] (defined at: ./index.rsh:275:13:function exp)'],
          msg: 'ARC200: Balance box already exists',
          who: 'Deployer'
          });
        await stdlib.mapSet(map0, ctc3, v3514, ctc1, stdlib.checkedBigNumberify('./index.rsh:276:36:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
        const v3520 = true;
        await txn3.getOutput('createBalanceBox', 'v3520', ctc17, v3520);
        const cv1912 = v1912;
        const cv1913 = v2185;
        const cv1916 = v1916;
        
        v1912 = cv1912;
        v1913 = cv1913;
        v1916 = cv1916;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'deregister0_273': {
        const v3667 = v2184[1];
        undefined /* setApiDetails */;
        const v3677 = v1912.manager;
        const v3678 = stdlib.addressEq(v2183, v3677);
        stdlib.assert(v3678, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:329:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:328:28:application call to [unknown function] (defined at: ./index.rsh:328:28:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:328:28:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
          msg: 'ARC200: Only manager can grant',
          who: 'Deployer'
          });
        const v3680 = v1912.registered;
        stdlib.assert(v3680, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:330:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:328:28:application call to [unknown function] (defined at: ./index.rsh:328:28:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:328:28:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
          msg: 'Must be registered',
          who: 'Deployer'
          });
        const v3682 = v1912.keyInfo;
        const v3683 = {
          None: 0,
          Some: 1
          }[v3682[0]];
        const v3684 = stdlib.eq(v3683, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v3685 = v3684 ? false : true;
        stdlib.assert(v3685, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:331:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:328:28:application call to [unknown function] (defined at: ./index.rsh:328:28:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:328:28:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
          msg: 'Must have key info',
          who: 'Deployer'
          });
        const v3701 = stdlib.add(v1916, stdlib.checkedBigNumberify('./index.rsh:333:9:decimal', stdlib.UInt_max, '1000'));
        ;
        switch (v3682[0]) {
          case 'None': {
            const v3836 = v3682[1];
            const v3837 = false;
            await txn3.getOutput('deregister', 'v3837', ctc17, v3837);
            const cv1912 = v1912;
            const cv1913 = v2185;
            const cv1916 = v3701;
            
            v1912 = cv1912;
            v1913 = cv1913;
            v1916 = cv1916;
            
            txn2 = txn3;
            continue;
            break;
            }
          case 'Some': {
            const v3846 = v3682[1];
            const v3847 = true;
            await txn3.getOutput('deregister', 'v3847', ctc17, v3847);
            null;
            const v3862 = stdlib.sub(v3701, stdlib.checkedBigNumberify('./index.rsh:341:24:decimal', stdlib.UInt_max, '1000'));
            ;
            const v3867 = {
              keyInfo: v1910,
              manager: v3677,
              registered: false
              };
            const cv1912 = v3867;
            const cv1913 = v2185;
            const cv1916 = v3862;
            
            v1912 = cv1912;
            v1913 = cv1913;
            v1916 = cv1916;
            
            txn2 = txn3;
            continue;
            break;
            }
          }
        break;
        }
      case 'grant0_273': {
        const v3963 = v2184[1];
        undefined /* setApiDetails */;
        ;
        const v4168 = v3963[stdlib.checkedBigNumberify('./index.rsh:376:10:spread', stdlib.UInt_max, '0')];
        const v4169 = stdlib.addressEq(v4168, v1891);
        const v4170 = v4169 ? false : true;
        stdlib.assert(v4170, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:377:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:381:13:application call to [unknown function] (defined at: ./index.rsh:381:13:function exp)'],
          msg: 'ARC200: Grant zero address',
          who: 'Deployer'
          });
        const v4172 = v1912.manager;
        const v4173 = stdlib.addressEq(v4168, v4172);
        const v4174 = v4173 ? false : true;
        stdlib.assert(v4174, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:378:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:381:13:application call to [unknown function] (defined at: ./index.rsh:381:13:function exp)'],
          msg: 'ARC200: Grant to manager',
          who: 'Deployer'
          });
        const v4177 = stdlib.addressEq(v2183, v4172);
        stdlib.assert(v4177, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:379:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:381:13:application call to [unknown function] (defined at: ./index.rsh:381:13:function exp)'],
          msg: 'ARC200: Only manager can grant',
          who: 'Deployer'
          });
        const v4180 = null;
        await txn3.getOutput('grant', 'v4180', ctc0, v4180);
        const v4187 = v1912.keyInfo;
        const v4189 = v1912.registered;
        const v4190 = {
          keyInfo: v4187,
          manager: v4168,
          registered: v4189
          };
        const cv1912 = v4190;
        const cv1913 = v2185;
        const cv1916 = v1916;
        
        v1912 = cv1912;
        v1913 = cv1913;
        v1916 = cv1916;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'nop0_273': {
        const v4259 = v2184[1];
        undefined /* setApiDetails */;
        ;
        const v4490 = null;
        await txn3.getOutput('nop', 'v4490', ctc0, v4490);
        const cv1912 = v1912;
        const cv1913 = v2185;
        const cv1916 = v1916;
        
        v1912 = cv1912;
        v1913 = cv1913;
        v1916 = cv1916;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'register0_273': {
        const v4555 = v2184[1];
        undefined /* setApiDetails */;
        const v4584 = v1912.manager;
        const v4585 = stdlib.addressEq(v2183, v4584);
        stdlib.assert(v4585, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:300:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:299:74:application call to [unknown function] (defined at: ./index.rsh:299:74:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:299:74:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
          msg: 'ARC200: Only manager can grant',
          who: 'Deployer'
          });
        const v4589 = stdlib.add(v1916, stdlib.checkedBigNumberify('./index.rsh:302:9:decimal', stdlib.UInt_max, '1000'));
        ;
        const v4794 = v4555[stdlib.checkedBigNumberify('./index.rsh:299:10:spread', stdlib.UInt_max, '0')];
        const v4795 = v4555[stdlib.checkedBigNumberify('./index.rsh:299:10:spread', stdlib.UInt_max, '1')];
        const v4796 = v4555[stdlib.checkedBigNumberify('./index.rsh:299:10:spread', stdlib.UInt_max, '2')];
        const v4797 = v4555[stdlib.checkedBigNumberify('./index.rsh:299:10:spread', stdlib.UInt_max, '3')];
        const v4798 = v4555[stdlib.checkedBigNumberify('./index.rsh:299:10:spread', stdlib.UInt_max, '4')];
        const v4799 = v4555[stdlib.checkedBigNumberify('./index.rsh:299:10:spread', stdlib.UInt_max, '5')];
        const v4809 = true;
        await txn3.getOutput('register', 'v4809', ctc17, v4809);
        const v4821 = {
          selkey: v4795,
          spkey: v4796,
          votefst: v4797,
          votekd: v4799,
          votekey: v4794,
          votelst: v4798
          };
        null;
        null;
        null;
        null;
        null;
        null;
        null;
        const v4825 = stdlib.sub(v4589, stdlib.checkedBigNumberify('./index.rsh:321:20:decimal', stdlib.UInt_max, '1000'));
        ;
        const v4830 = ['Some', v4821];
        const v4831 = {
          keyInfo: v4830,
          manager: v4584,
          registered: true
          };
        const cv1912 = v4831;
        const cv1913 = v2185;
        const cv1916 = v4825;
        
        v1912 = cv1912;
        v1913 = cv1913;
        v1916 = cv1916;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'touch0_273': {
        const v4851 = v2184[1];
        undefined /* setApiDetails */;
        ;
        const v5134 = (stdlib.le(await ctc.getBalance(), v1916) ? stdlib.checkedBigNumberify('./index.rsh:356:39:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v1916));
        const v5135 = stdlib.safeAdd(v5134, v1916);
        const v5136 = v1912.manager;
        const v5140 = stdlib.sub(v5135, v5134);
        ;
        await txn3.getOutput('touch', 'v5134', ctc4, v5134);
        const cv1912 = v1912;
        const cv1913 = v2185;
        const cv1916 = v5140;
        
        v1912 = cv1912;
        v1913 = cv1913;
        v1916 = cv1916;
        
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
  
  
  const [v1891, v1892, v1893, v1896, v1899, v1910, v1912, v1916] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc3, ctc7, ctc1, ctc4, ctc10, ctc12, ctc4]);
  const v2004 = ctc.selfAddress();
  const v2006 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:258:47:application call to [unknown function] (defined at: ./index.rsh:258:47:function exp)', 'at ./index.rsh:163:29:application call to "runarc200_approve0_273" (defined at: ./index.rsh:258:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'in',
    who: 'arc200_approve'
    });
  const v2007 = v2006[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2011 = stdlib.addressEq(v2004, v1891);
  const v2012 = v2011 ? false : true;
  stdlib.assert(v2012, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:259:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:258:47:application call to [unknown function] (defined at: ./index.rsh:258:47:function exp)', 'at ./index.rsh:163:29:application call to "runarc200_approve0_273" (defined at: ./index.rsh:258:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'ARC200: Approve this to zero address',
    who: 'arc200_approve'
    });
  const v2014 = stdlib.addressEq(v2007, v1891);
  const v2015 = v2014 ? false : true;
  stdlib.assert(v2015, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:260:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:258:47:application call to [unknown function] (defined at: ./index.rsh:258:47:function exp)', 'at ./index.rsh:163:29:application call to "runarc200_approve0_273" (defined at: ./index.rsh:258:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'ARC200: Approve to zero address',
    who: 'arc200_approve'
    });
  const v2024 = ['arc200_approve0_273', v2006];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1891, v1892, v1893, v1896, v1899, v1910, v1912, v1916, v2024],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [stdlib.checkedBigNumberify('./index.rsh:258:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2184], secs: v2186, time: v2185, didSend: v1321, from: v2183 } = txn1;
      
      switch (v2184[0]) {
        case 'arc200_approve0_273': {
          const v2187 = v2184[1];
          sim_r.txns.push({
            kind: 'api',
            who: "arc200_approve"
            });
          ;
          const v2223 = v2187[stdlib.checkedBigNumberify('./index.rsh:258:10:spread', stdlib.UInt_max, '0')];
          const v2224 = v2187[stdlib.checkedBigNumberify('./index.rsh:258:10:spread', stdlib.UInt_max, '1')];
          const v2233 = [v2183, v2223];
          await stdlib.simMapSet(sim_r, 1, ctc15, v2233, ctc1, v2224);
          null;
          const v2234 = true;
          const v2235 = await txn1.getOutput('arc200_approve', 'v2234', ctc11, v2234);
          
          const v7403 = v1912;
          const v7405 = v1916;
          sim_r.isHalt = false;
          
          break;
          }
        case 'arc200_transfer0_273': {
          const v2483 = v2184[1];
          
          break;
          }
        case 'arc200_transferFrom0_273': {
          const v2779 = v2184[1];
          
          break;
          }
        case 'createAllowanceBox0_273': {
          const v3075 = v2184[1];
          
          break;
          }
        case 'createBalanceBox0_273': {
          const v3371 = v2184[1];
          
          break;
          }
        case 'deregister0_273': {
          const v3667 = v2184[1];
          
          break;
          }
        case 'grant0_273': {
          const v3963 = v2184[1];
          
          break;
          }
        case 'nop0_273': {
          const v4259 = v2184[1];
          
          break;
          }
        case 'register0_273': {
          const v4555 = v2184[1];
          
          break;
          }
        case 'touch0_273': {
          const v4851 = v2184[1];
          
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
  const {data: [v2184], secs: v2186, time: v2185, didSend: v1321, from: v2183 } = txn1;
  switch (v2184[0]) {
    case 'arc200_approve0_273': {
      const v2187 = v2184[1];
      undefined /* setApiDetails */;
      ;
      const v2223 = v2187[stdlib.checkedBigNumberify('./index.rsh:258:10:spread', stdlib.UInt_max, '0')];
      const v2224 = v2187[stdlib.checkedBigNumberify('./index.rsh:258:10:spread', stdlib.UInt_max, '1')];
      const v2225 = stdlib.addressEq(v2183, v1891);
      const v2226 = v2225 ? false : true;
      stdlib.assert(v2226, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:259:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:262:13:application call to [unknown function] (defined at: ./index.rsh:262:13:function exp)'],
        msg: 'ARC200: Approve this to zero address',
        who: 'arc200_approve'
        });
      const v2228 = stdlib.addressEq(v2223, v1891);
      const v2229 = v2228 ? false : true;
      stdlib.assert(v2229, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:260:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:262:13:application call to [unknown function] (defined at: ./index.rsh:262:13:function exp)'],
        msg: 'ARC200: Approve to zero address',
        who: 'arc200_approve'
        });
      const v2233 = [v2183, v2223];
      await stdlib.mapSet(map1, ctc15, v2233, ctc1, v2224);
      null;
      const v2234 = true;
      const v2235 = await txn1.getOutput('arc200_approve', 'v2234', ctc11, v2234);
      if (v1321) {
        stdlib.protect(ctc0, await interact.out(v2187, v2235), {
          at: './index.rsh:258:11:application',
          fs: ['at ./index.rsh:258:11:application call to [unknown function] (defined at: ./index.rsh:258:11:function exp)', 'at ./index.rsh:265:12:application call to "k" (defined at: ./index.rsh:262:13:function exp)', 'at ./index.rsh:262:13:application call to [unknown function] (defined at: ./index.rsh:262:13:function exp)'],
          msg: 'out',
          who: 'arc200_approve'
          });
        }
      else {
        }
      
      const v7403 = v1912;
      const v7405 = v1916;
      return;
      
      break;
      }
    case 'arc200_transfer0_273': {
      const v2483 = v2184[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_273': {
      const v2779 = v2184[1];
      return;
      break;
      }
    case 'createAllowanceBox0_273': {
      const v3075 = v2184[1];
      return;
      break;
      }
    case 'createBalanceBox0_273': {
      const v3371 = v2184[1];
      return;
      break;
      }
    case 'deregister0_273': {
      const v3667 = v2184[1];
      return;
      break;
      }
    case 'grant0_273': {
      const v3963 = v2184[1];
      return;
      break;
      }
    case 'nop0_273': {
      const v4259 = v2184[1];
      return;
      break;
      }
    case 'register0_273': {
      const v4555 = v2184[1];
      return;
      break;
      }
    case 'touch0_273': {
      const v4851 = v2184[1];
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
  
  
  const [v1891, v1892, v1893, v1896, v1899, v1910, v1912, v1916] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc3, ctc7, ctc1, ctc4, ctc10, ctc12, ctc4]);
  const v1953 = ctc.selfAddress();
  const v1955 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:218:44:application call to [unknown function] (defined at: ./index.rsh:218:44:function exp)', 'at ./index.rsh:163:29:application call to "runarc200_transfer0_273" (defined at: ./index.rsh:218:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'in',
    who: 'arc200_transfer'
    });
  const v1957 = v1955[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v1961 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v1953, ctc1), null);
  const v1962 = stdlib.fromSome(v1961, stdlib.checkedBigNumberify('./index.rsh:175:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v1963 = stdlib.ge256(v1962, v1957);
  stdlib.assert(v1963, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:210:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:219:18:application call to "chkTransfer" (defined at: ./index.rsh:209:48:function exp)', 'at ./index.rsh:218:44:application call to [unknown function] (defined at: ./index.rsh:218:44:function exp)', 'at ./index.rsh:163:29:application call to "runarc200_transfer0_273" (defined at: ./index.rsh:218:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'ARC200: Transfer amount must not be greater than balance',
    who: 'arc200_transfer'
    });
  const v1972 = ['arc200_transfer0_273', v1955];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1891, v1892, v1893, v1896, v1899, v1910, v1912, v1916, v1972],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [stdlib.checkedBigNumberify('./index.rsh:218:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2184], secs: v2186, time: v2185, didSend: v1321, from: v2183 } = txn1;
      
      switch (v2184[0]) {
        case 'arc200_approve0_273': {
          const v2187 = v2184[1];
          
          break;
          }
        case 'arc200_transfer0_273': {
          const v2483 = v2184[1];
          sim_r.txns.push({
            kind: 'api',
            who: "arc200_transfer"
            });
          ;
          const v2540 = v2483[stdlib.checkedBigNumberify('./index.rsh:218:10:spread', stdlib.UInt_max, '0')];
          const v2541 = v2483[stdlib.checkedBigNumberify('./index.rsh:218:10:spread', stdlib.UInt_max, '1')];
          const v2543 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v2183, ctc1), null);
          const v2544 = stdlib.fromSome(v2543, stdlib.checkedBigNumberify('./index.rsh:175:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2549 = true;
          const v2550 = await txn1.getOutput('arc200_transfer', 'v2549', ctc11, v2549);
          
          const v2559 = stdlib.safeSub256(v2544, v2541);
          await stdlib.simMapSet(sim_r, 0, ctc3, v2183, ctc1, v2559);
          const v2560 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v2540, ctc1), null);
          const v2561 = stdlib.fromSome(v2560, stdlib.checkedBigNumberify('./index.rsh:175:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2562 = stdlib.safeAdd256(v2561, v2541);
          await stdlib.simMapSet(sim_r, 0, ctc3, v2540, ctc1, v2562);
          null;
          const v7439 = v1912;
          const v7441 = v1916;
          sim_r.isHalt = false;
          
          break;
          }
        case 'arc200_transferFrom0_273': {
          const v2779 = v2184[1];
          
          break;
          }
        case 'createAllowanceBox0_273': {
          const v3075 = v2184[1];
          
          break;
          }
        case 'createBalanceBox0_273': {
          const v3371 = v2184[1];
          
          break;
          }
        case 'deregister0_273': {
          const v3667 = v2184[1];
          
          break;
          }
        case 'grant0_273': {
          const v3963 = v2184[1];
          
          break;
          }
        case 'nop0_273': {
          const v4259 = v2184[1];
          
          break;
          }
        case 'register0_273': {
          const v4555 = v2184[1];
          
          break;
          }
        case 'touch0_273': {
          const v4851 = v2184[1];
          
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
  const {data: [v2184], secs: v2186, time: v2185, didSend: v1321, from: v2183 } = txn1;
  switch (v2184[0]) {
    case 'arc200_approve0_273': {
      const v2187 = v2184[1];
      return;
      break;
      }
    case 'arc200_transfer0_273': {
      const v2483 = v2184[1];
      undefined /* setApiDetails */;
      ;
      const v2540 = v2483[stdlib.checkedBigNumberify('./index.rsh:218:10:spread', stdlib.UInt_max, '0')];
      const v2541 = v2483[stdlib.checkedBigNumberify('./index.rsh:218:10:spread', stdlib.UInt_max, '1')];
      const v2543 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2183, ctc1), null);
      const v2544 = stdlib.fromSome(v2543, stdlib.checkedBigNumberify('./index.rsh:175:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2545 = stdlib.ge256(v2544, v2541);
      stdlib.assert(v2545, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:210:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:219:18:application call to "chkTransfer" (defined at: ./index.rsh:209:48:function exp)', 'at ./index.rsh:221:13:application call to [unknown function] (defined at: ./index.rsh:221:13:function exp)'],
        msg: 'ARC200: Transfer amount must not be greater than balance',
        who: 'arc200_transfer'
        });
      const v2549 = true;
      const v2550 = await txn1.getOutput('arc200_transfer', 'v2549', ctc11, v2549);
      if (v1321) {
        stdlib.protect(ctc0, await interact.out(v2483, v2550), {
          at: './index.rsh:218:11:application',
          fs: ['at ./index.rsh:218:11:application call to [unknown function] (defined at: ./index.rsh:218:11:function exp)', 'at ./index.rsh:222:12:application call to "k" (defined at: ./index.rsh:221:13:function exp)', 'at ./index.rsh:221:13:application call to [unknown function] (defined at: ./index.rsh:221:13:function exp)'],
          msg: 'out',
          who: 'arc200_transfer'
          });
        }
      else {
        }
      
      const v2559 = stdlib.safeSub256(v2544, v2541);
      await stdlib.mapSet(map0, ctc3, v2183, ctc1, v2559);
      const v2560 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2540, ctc1), null);
      const v2561 = stdlib.fromSome(v2560, stdlib.checkedBigNumberify('./index.rsh:175:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2562 = stdlib.safeAdd256(v2561, v2541);
      await stdlib.mapSet(map0, ctc3, v2540, ctc1, v2562);
      null;
      const v7439 = v1912;
      const v7441 = v1916;
      return;
      
      break;
      }
    case 'arc200_transferFrom0_273': {
      const v2779 = v2184[1];
      return;
      break;
      }
    case 'createAllowanceBox0_273': {
      const v3075 = v2184[1];
      return;
      break;
      }
    case 'createBalanceBox0_273': {
      const v3371 = v2184[1];
      return;
      break;
      }
    case 'deregister0_273': {
      const v3667 = v2184[1];
      return;
      break;
      }
    case 'grant0_273': {
      const v3963 = v2184[1];
      return;
      break;
      }
    case 'nop0_273': {
      const v4259 = v2184[1];
      return;
      break;
      }
    case 'register0_273': {
      const v4555 = v2184[1];
      return;
      break;
      }
    case 'touch0_273': {
      const v4851 = v2184[1];
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
  
  
  const [v1891, v1892, v1893, v1896, v1899, v1910, v1912, v1916] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc3, ctc7, ctc1, ctc4, ctc10, ctc12, ctc4]);
  const v1974 = ctc.selfAddress();
  const v1976 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:244:55:application call to [unknown function] (defined at: ./index.rsh:244:55:function exp)', 'at ./index.rsh:163:29:application call to "runarc200_transferFrom0_273" (defined at: ./index.rsh:244:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'in',
    who: 'arc200_transferFrom'
    });
  const v1977 = v1976[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1979 = v1976[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v1984 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v1977, ctc1), null);
  const v1985 = stdlib.fromSome(v1984, stdlib.checkedBigNumberify('./index.rsh:175:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v1986 = stdlib.ge256(v1985, v1979);
  stdlib.assert(v1986, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:230:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:245:22:application call to "chkTransferFrom" (defined at: ./index.rsh:229:62:function exp)', 'at ./index.rsh:244:55:application call to [unknown function] (defined at: ./index.rsh:244:55:function exp)', 'at ./index.rsh:163:29:application call to "runarc200_transferFrom0_273" (defined at: ./index.rsh:244:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'ARC200: Amount must not be greater than balance',
    who: 'arc200_transferFrom'
    });
  const v1988 = [v1977, v1974];
  const v1989 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc14, v1988, ctc1), null);
  const v1990 = stdlib.fromSome(v1989, stdlib.checkedBigNumberify('./index.rsh:181:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
  const v1991 = stdlib.ge256(v1990, v1979);
  stdlib.assert(v1991, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:234:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:245:22:application call to "chkTransferFrom" (defined at: ./index.rsh:229:62:function exp)', 'at ./index.rsh:244:55:application call to [unknown function] (defined at: ./index.rsh:244:55:function exp)', 'at ./index.rsh:163:29:application call to "runarc200_transferFrom0_273" (defined at: ./index.rsh:244:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'ARC200: Amount must not be greater than allowance',
    who: 'arc200_transferFrom'
    });
  const v2002 = ['arc200_transferFrom0_273', v1976];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1891, v1892, v1893, v1896, v1899, v1910, v1912, v1916, v2002],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [stdlib.checkedBigNumberify('./index.rsh:244:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2184], secs: v2186, time: v2185, didSend: v1321, from: v2183 } = txn1;
      
      switch (v2184[0]) {
        case 'arc200_approve0_273': {
          const v2187 = v2184[1];
          
          break;
          }
        case 'arc200_transfer0_273': {
          const v2483 = v2184[1];
          
          break;
          }
        case 'arc200_transferFrom0_273': {
          const v2779 = v2184[1];
          sim_r.txns.push({
            kind: 'api',
            who: "arc200_transferFrom"
            });
          ;
          const v2862 = v2779[stdlib.checkedBigNumberify('./index.rsh:244:10:spread', stdlib.UInt_max, '0')];
          const v2863 = v2779[stdlib.checkedBigNumberify('./index.rsh:244:10:spread', stdlib.UInt_max, '1')];
          const v2864 = v2779[stdlib.checkedBigNumberify('./index.rsh:244:10:spread', stdlib.UInt_max, '2')];
          const v2866 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v2862, ctc1), null);
          const v2867 = stdlib.fromSome(v2866, stdlib.checkedBigNumberify('./index.rsh:175:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2870 = [v2862, v2183];
          const v2871 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc14, v2870, ctc1), null);
          const v2872 = stdlib.fromSome(v2871, stdlib.checkedBigNumberify('./index.rsh:181:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2880 = stdlib.safeSub256(v2867, v2864);
          await stdlib.simMapSet(sim_r, 0, ctc3, v2862, ctc1, v2880);
          const v2881 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v2863, ctc1), null);
          const v2882 = stdlib.fromSome(v2881, stdlib.checkedBigNumberify('./index.rsh:175:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v2883 = stdlib.safeAdd256(v2882, v2864);
          await stdlib.simMapSet(sim_r, 0, ctc3, v2863, ctc1, v2883);
          null;
          const v2888 = stdlib.safeSub256(v2872, v2864);
          await stdlib.simMapSet(sim_r, 1, ctc14, v2870, ctc1, v2888);
          null;
          const v2891 = true;
          const v2892 = await txn1.getOutput('arc200_transferFrom', 'v2891', ctc11, v2891);
          
          const v7475 = v1912;
          const v7477 = v1916;
          sim_r.isHalt = false;
          
          break;
          }
        case 'createAllowanceBox0_273': {
          const v3075 = v2184[1];
          
          break;
          }
        case 'createBalanceBox0_273': {
          const v3371 = v2184[1];
          
          break;
          }
        case 'deregister0_273': {
          const v3667 = v2184[1];
          
          break;
          }
        case 'grant0_273': {
          const v3963 = v2184[1];
          
          break;
          }
        case 'nop0_273': {
          const v4259 = v2184[1];
          
          break;
          }
        case 'register0_273': {
          const v4555 = v2184[1];
          
          break;
          }
        case 'touch0_273': {
          const v4851 = v2184[1];
          
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
  const {data: [v2184], secs: v2186, time: v2185, didSend: v1321, from: v2183 } = txn1;
  switch (v2184[0]) {
    case 'arc200_approve0_273': {
      const v2187 = v2184[1];
      return;
      break;
      }
    case 'arc200_transfer0_273': {
      const v2483 = v2184[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_273': {
      const v2779 = v2184[1];
      undefined /* setApiDetails */;
      ;
      const v2862 = v2779[stdlib.checkedBigNumberify('./index.rsh:244:10:spread', stdlib.UInt_max, '0')];
      const v2863 = v2779[stdlib.checkedBigNumberify('./index.rsh:244:10:spread', stdlib.UInt_max, '1')];
      const v2864 = v2779[stdlib.checkedBigNumberify('./index.rsh:244:10:spread', stdlib.UInt_max, '2')];
      const v2866 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2862, ctc1), null);
      const v2867 = stdlib.fromSome(v2866, stdlib.checkedBigNumberify('./index.rsh:175:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2868 = stdlib.ge256(v2867, v2864);
      stdlib.assert(v2868, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:230:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:245:22:application call to "chkTransferFrom" (defined at: ./index.rsh:229:62:function exp)', 'at ./index.rsh:247:13:application call to [unknown function] (defined at: ./index.rsh:247:13:function exp)'],
        msg: 'ARC200: Amount must not be greater than balance',
        who: 'arc200_transferFrom'
        });
      const v2870 = [v2862, v2183];
      const v2871 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc14, v2870, ctc1), null);
      const v2872 = stdlib.fromSome(v2871, stdlib.checkedBigNumberify('./index.rsh:181:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2873 = stdlib.ge256(v2872, v2864);
      stdlib.assert(v2873, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:234:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:245:22:application call to "chkTransferFrom" (defined at: ./index.rsh:229:62:function exp)', 'at ./index.rsh:247:13:application call to [unknown function] (defined at: ./index.rsh:247:13:function exp)'],
        msg: 'ARC200: Amount must not be greater than allowance',
        who: 'arc200_transferFrom'
        });
      const v2880 = stdlib.safeSub256(v2867, v2864);
      await stdlib.mapSet(map0, ctc3, v2862, ctc1, v2880);
      const v2881 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2863, ctc1), null);
      const v2882 = stdlib.fromSome(v2881, stdlib.checkedBigNumberify('./index.rsh:175:40:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v2883 = stdlib.safeAdd256(v2882, v2864);
      await stdlib.mapSet(map0, ctc3, v2863, ctc1, v2883);
      null;
      const v2888 = stdlib.safeSub256(v2872, v2864);
      await stdlib.mapSet(map1, ctc14, v2870, ctc1, v2888);
      null;
      const v2891 = true;
      const v2892 = await txn1.getOutput('arc200_transferFrom', 'v2891', ctc11, v2891);
      if (v1321) {
        stdlib.protect(ctc0, await interact.out(v2779, v2892), {
          at: './index.rsh:244:11:application',
          fs: ['at ./index.rsh:244:11:application call to [unknown function] (defined at: ./index.rsh:244:11:function exp)', 'at ./index.rsh:249:12:application call to "k" (defined at: ./index.rsh:247:13:function exp)', 'at ./index.rsh:247:13:application call to [unknown function] (defined at: ./index.rsh:247:13:function exp)'],
          msg: 'out',
          who: 'arc200_transferFrom'
          });
        }
      else {
        }
      
      const v7475 = v1912;
      const v7477 = v1916;
      return;
      
      break;
      }
    case 'createAllowanceBox0_273': {
      const v3075 = v2184[1];
      return;
      break;
      }
    case 'createBalanceBox0_273': {
      const v3371 = v2184[1];
      return;
      break;
      }
    case 'deregister0_273': {
      const v3667 = v2184[1];
      return;
      break;
      }
    case 'grant0_273': {
      const v3963 = v2184[1];
      return;
      break;
      }
    case 'nop0_273': {
      const v4259 = v2184[1];
      return;
      break;
      }
    case 'register0_273': {
      const v4555 = v2184[1];
      return;
      break;
      }
    case 'touch0_273': {
      const v4851 = v2184[1];
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
  
  
  const [v1891, v1892, v1893, v1896, v1899, v1910, v1912, v1916] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc3, ctc7, ctc1, ctc4, ctc10, ctc12, ctc4]);
  const v2044 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:284:50:application call to [unknown function] (defined at: ./index.rsh:284:50:function exp)', 'at ./index.rsh:163:29:application call to "runcreateAllowanceBox0_273" (defined at: ./index.rsh:284:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'in',
    who: 'createAllowanceBox'
    });
  const v2045 = v2044[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2046 = v2044[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2049 = [v2045, v2046];
  const v2050 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc13, v2049, ctc1), null);
  const v2051 = {
    None: 0,
    Some: 1
    }[v2050[0]];
  const v2052 = stdlib.eq(v2051, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
  stdlib.assert(v2052, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:285:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:284:50:application call to [unknown function] (defined at: ./index.rsh:284:50:function exp)', 'at ./index.rsh:163:29:application call to "runcreateAllowanceBox0_273" (defined at: ./index.rsh:284:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'ARC200: Allowance box already exists',
    who: 'createAllowanceBox'
    });
  const v2061 = ['createAllowanceBox0_273', v2044];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1891, v1892, v1893, v1896, v1899, v1910, v1912, v1916, v2061],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [stdlib.checkedBigNumberify('./index.rsh:284:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2184], secs: v2186, time: v2185, didSend: v1321, from: v2183 } = txn1;
      
      switch (v2184[0]) {
        case 'arc200_approve0_273': {
          const v2187 = v2184[1];
          
          break;
          }
        case 'arc200_transfer0_273': {
          const v2483 = v2184[1];
          
          break;
          }
        case 'arc200_transferFrom0_273': {
          const v2779 = v2184[1];
          
          break;
          }
        case 'createAllowanceBox0_273': {
          const v3075 = v2184[1];
          sim_r.txns.push({
            kind: 'api',
            who: "createAllowanceBox"
            });
          ;
          const v3198 = v3075[stdlib.checkedBigNumberify('./index.rsh:284:10:spread', stdlib.UInt_max, '0')];
          const v3199 = v3075[stdlib.checkedBigNumberify('./index.rsh:284:10:spread', stdlib.UInt_max, '1')];
          const v3200 = [v3198, v3199];
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc13, v3200, ctc1), null);
          await stdlib.simMapSet(sim_r, 1, ctc13, v3200, ctc1, stdlib.checkedBigNumberify('./index.rsh:291:50:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3208 = true;
          const v3209 = await txn1.getOutput('createAllowanceBox', 'v3208', ctc11, v3208);
          
          const v7511 = v1912;
          const v7513 = v1916;
          sim_r.isHalt = false;
          
          break;
          }
        case 'createBalanceBox0_273': {
          const v3371 = v2184[1];
          
          break;
          }
        case 'deregister0_273': {
          const v3667 = v2184[1];
          
          break;
          }
        case 'grant0_273': {
          const v3963 = v2184[1];
          
          break;
          }
        case 'nop0_273': {
          const v4259 = v2184[1];
          
          break;
          }
        case 'register0_273': {
          const v4555 = v2184[1];
          
          break;
          }
        case 'touch0_273': {
          const v4851 = v2184[1];
          
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
  const {data: [v2184], secs: v2186, time: v2185, didSend: v1321, from: v2183 } = txn1;
  switch (v2184[0]) {
    case 'arc200_approve0_273': {
      const v2187 = v2184[1];
      return;
      break;
      }
    case 'arc200_transfer0_273': {
      const v2483 = v2184[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_273': {
      const v2779 = v2184[1];
      return;
      break;
      }
    case 'createAllowanceBox0_273': {
      const v3075 = v2184[1];
      undefined /* setApiDetails */;
      ;
      const v3198 = v3075[stdlib.checkedBigNumberify('./index.rsh:284:10:spread', stdlib.UInt_max, '0')];
      const v3199 = v3075[stdlib.checkedBigNumberify('./index.rsh:284:10:spread', stdlib.UInt_max, '1')];
      const v3200 = [v3198, v3199];
      const v3201 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc13, v3200, ctc1), null);
      const v3202 = {
        None: 0,
        Some: 1
        }[v3201[0]];
      const v3203 = stdlib.eq(v3202, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
      stdlib.assert(v3203, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:285:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:290:13:application call to [unknown function] (defined at: ./index.rsh:290:13:function exp)'],
        msg: 'ARC200: Allowance box already exists',
        who: 'createAllowanceBox'
        });
      await stdlib.mapSet(map1, ctc13, v3200, ctc1, stdlib.checkedBigNumberify('./index.rsh:291:50:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v3208 = true;
      const v3209 = await txn1.getOutput('createAllowanceBox', 'v3208', ctc11, v3208);
      if (v1321) {
        stdlib.protect(ctc0, await interact.out(v3075, v3209), {
          at: './index.rsh:284:11:application',
          fs: ['at ./index.rsh:284:11:application call to [unknown function] (defined at: ./index.rsh:284:11:function exp)', 'at ./index.rsh:292:12:application call to "k" (defined at: ./index.rsh:290:13:function exp)', 'at ./index.rsh:290:13:application call to [unknown function] (defined at: ./index.rsh:290:13:function exp)'],
          msg: 'out',
          who: 'createAllowanceBox'
          });
        }
      else {
        }
      
      const v7511 = v1912;
      const v7513 = v1916;
      return;
      
      break;
      }
    case 'createBalanceBox0_273': {
      const v3371 = v2184[1];
      return;
      break;
      }
    case 'deregister0_273': {
      const v3667 = v2184[1];
      return;
      break;
      }
    case 'grant0_273': {
      const v3963 = v2184[1];
      return;
      break;
      }
    case 'nop0_273': {
      const v4259 = v2184[1];
      return;
      break;
      }
    case 'register0_273': {
      const v4555 = v2184[1];
      return;
      break;
      }
    case 'touch0_273': {
      const v4851 = v2184[1];
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
  
  
  const [v1891, v1892, v1893, v1896, v1899, v1910, v1912, v1916] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc3, ctc7, ctc1, ctc4, ctc10, ctc12, ctc4]);
  const v2028 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:272:38:application call to [unknown function] (defined at: ./index.rsh:272:38:function exp)', 'at ./index.rsh:163:29:application call to "runcreateBalanceBox0_273" (defined at: ./index.rsh:272:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'in',
    who: 'createBalanceBox'
    });
  const v2029 = v2028[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2031 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v2029, ctc1), null);
  const v2032 = {
    None: 0,
    Some: 1
    }[v2031[0]];
  const v2033 = stdlib.eq(v2032, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
  stdlib.assert(v2033, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:273:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:272:38:application call to [unknown function] (defined at: ./index.rsh:272:38:function exp)', 'at ./index.rsh:163:29:application call to "runcreateBalanceBox0_273" (defined at: ./index.rsh:272:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'ARC200: Balance box already exists',
    who: 'createBalanceBox'
    });
  const v2040 = ['createBalanceBox0_273', v2028];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1891, v1892, v1893, v1896, v1899, v1910, v1912, v1916, v2040],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [stdlib.checkedBigNumberify('./index.rsh:272:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2184], secs: v2186, time: v2185, didSend: v1321, from: v2183 } = txn1;
      
      switch (v2184[0]) {
        case 'arc200_approve0_273': {
          const v2187 = v2184[1];
          
          break;
          }
        case 'arc200_transfer0_273': {
          const v2483 = v2184[1];
          
          break;
          }
        case 'arc200_transferFrom0_273': {
          const v2779 = v2184[1];
          
          break;
          }
        case 'createAllowanceBox0_273': {
          const v3075 = v2184[1];
          
          break;
          }
        case 'createBalanceBox0_273': {
          const v3371 = v2184[1];
          sim_r.txns.push({
            kind: 'api',
            who: "createBalanceBox"
            });
          ;
          const v3514 = v3371[stdlib.checkedBigNumberify('./index.rsh:272:10:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc3, v3514, ctc1), null);
          await stdlib.simMapSet(sim_r, 0, ctc3, v3514, ctc1, stdlib.checkedBigNumberify('./index.rsh:276:36:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
          const v3520 = true;
          const v3521 = await txn1.getOutput('createBalanceBox', 'v3520', ctc11, v3520);
          
          const v7547 = v1912;
          const v7549 = v1916;
          sim_r.isHalt = false;
          
          break;
          }
        case 'deregister0_273': {
          const v3667 = v2184[1];
          
          break;
          }
        case 'grant0_273': {
          const v3963 = v2184[1];
          
          break;
          }
        case 'nop0_273': {
          const v4259 = v2184[1];
          
          break;
          }
        case 'register0_273': {
          const v4555 = v2184[1];
          
          break;
          }
        case 'touch0_273': {
          const v4851 = v2184[1];
          
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
  const {data: [v2184], secs: v2186, time: v2185, didSend: v1321, from: v2183 } = txn1;
  switch (v2184[0]) {
    case 'arc200_approve0_273': {
      const v2187 = v2184[1];
      return;
      break;
      }
    case 'arc200_transfer0_273': {
      const v2483 = v2184[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_273': {
      const v2779 = v2184[1];
      return;
      break;
      }
    case 'createAllowanceBox0_273': {
      const v3075 = v2184[1];
      return;
      break;
      }
    case 'createBalanceBox0_273': {
      const v3371 = v2184[1];
      undefined /* setApiDetails */;
      ;
      const v3514 = v3371[stdlib.checkedBigNumberify('./index.rsh:272:10:spread', stdlib.UInt_max, '0')];
      const v3515 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc3, v3514, ctc1), null);
      const v3516 = {
        None: 0,
        Some: 1
        }[v3515[0]];
      const v3517 = stdlib.eq(v3516, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
      stdlib.assert(v3517, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:273:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:275:13:application call to [unknown function] (defined at: ./index.rsh:275:13:function exp)'],
        msg: 'ARC200: Balance box already exists',
        who: 'createBalanceBox'
        });
      await stdlib.mapSet(map0, ctc3, v3514, ctc1, stdlib.checkedBigNumberify('./index.rsh:276:36:decimal', '115792089237316195423570985008687907853269984665640564039457584007913129639935', '0'));
      const v3520 = true;
      const v3521 = await txn1.getOutput('createBalanceBox', 'v3520', ctc11, v3520);
      if (v1321) {
        stdlib.protect(ctc0, await interact.out(v3371, v3521), {
          at: './index.rsh:272:11:application',
          fs: ['at ./index.rsh:272:11:application call to [unknown function] (defined at: ./index.rsh:272:11:function exp)', 'at ./index.rsh:277:12:application call to "k" (defined at: ./index.rsh:275:13:function exp)', 'at ./index.rsh:275:13:application call to [unknown function] (defined at: ./index.rsh:275:13:function exp)'],
          msg: 'out',
          who: 'createBalanceBox'
          });
        }
      else {
        }
      
      const v7547 = v1912;
      const v7549 = v1916;
      return;
      
      break;
      }
    case 'deregister0_273': {
      const v3667 = v2184[1];
      return;
      break;
      }
    case 'grant0_273': {
      const v3963 = v2184[1];
      return;
      break;
      }
    case 'nop0_273': {
      const v4259 = v2184[1];
      return;
      break;
      }
    case 'register0_273': {
      const v4555 = v2184[1];
      return;
      break;
      }
    case 'touch0_273': {
      const v4851 = v2184[1];
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
  
  
  const [v1891, v1892, v1893, v1896, v1899, v1910, v1912, v1916] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc3, ctc7, ctc1, ctc4, ctc10, ctc12, ctc4]);
  const v2098 = ctc.selfAddress();
  const v2100 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:328:28:application call to [unknown function] (defined at: ./index.rsh:328:28:function exp)', 'at ./index.rsh:163:29:application call to "runderegister0_273" (defined at: ./index.rsh:328:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'in',
    who: 'deregister'
    });
  const v2101 = v1912.manager;
  const v2102 = stdlib.addressEq(v2098, v2101);
  stdlib.assert(v2102, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:329:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:328:28:application call to [unknown function] (defined at: ./index.rsh:328:28:function exp)', 'at ./index.rsh:163:29:application call to "runderegister0_273" (defined at: ./index.rsh:328:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'ARC200: Only manager can grant',
    who: 'deregister'
    });
  const v2104 = v1912.registered;
  stdlib.assert(v2104, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:330:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:328:28:application call to [unknown function] (defined at: ./index.rsh:328:28:function exp)', 'at ./index.rsh:163:29:application call to "runderegister0_273" (defined at: ./index.rsh:328:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'Must be registered',
    who: 'deregister'
    });
  const v2106 = v1912.keyInfo;
  const v2107 = {
    None: 0,
    Some: 1
    }[v2106[0]];
  const v2108 = stdlib.eq(v2107, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
  const v2109 = v2108 ? false : true;
  stdlib.assert(v2109, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:331:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:328:28:application call to [unknown function] (defined at: ./index.rsh:328:28:function exp)', 'at ./index.rsh:163:29:application call to "runderegister0_273" (defined at: ./index.rsh:328:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'Must have key info',
    who: 'deregister'
    });
  const v2114 = ['deregister0_273', v2100];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1891, v1892, v1893, v1896, v1899, v1910, v1912, v1916, v2114],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [stdlib.checkedBigNumberify('./index.rsh:333:9:decimal', stdlib.UInt_max, '1000'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2184], secs: v2186, time: v2185, didSend: v1321, from: v2183 } = txn1;
      
      switch (v2184[0]) {
        case 'arc200_approve0_273': {
          const v2187 = v2184[1];
          
          break;
          }
        case 'arc200_transfer0_273': {
          const v2483 = v2184[1];
          
          break;
          }
        case 'arc200_transferFrom0_273': {
          const v2779 = v2184[1];
          
          break;
          }
        case 'createAllowanceBox0_273': {
          const v3075 = v2184[1];
          
          break;
          }
        case 'createBalanceBox0_273': {
          const v3371 = v2184[1];
          
          break;
          }
        case 'deregister0_273': {
          const v3667 = v2184[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deregister"
            });
          const v3677 = v1912.manager;
          const v3682 = v1912.keyInfo;
          const v3701 = stdlib.add(v1916, stdlib.checkedBigNumberify('./index.rsh:333:9:decimal', stdlib.UInt_max, '1000'));
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:333:9:decimal', stdlib.UInt_max, '1000'),
            kind: 'to',
            tok: undefined /* Nothing */
            });
          switch (v3682[0]) {
            case 'None': {
              const v3836 = v3682[1];
              const v3837 = false;
              const v3838 = await txn1.getOutput('deregister', 'v3837', ctc11, v3837);
              
              const v7583 = v1912;
              const v7585 = v3701;
              sim_r.isHalt = false;
              
              break;
              }
            case 'Some': {
              const v3846 = v3682[1];
              const v3847 = true;
              const v3848 = await txn1.getOutput('deregister', 'v3847', ctc11, v3847);
              
              null;
              const v3862 = stdlib.sub(v3701, stdlib.checkedBigNumberify('./index.rsh:341:24:decimal', stdlib.UInt_max, '1000'));
              sim_r.txns.push({
                kind: 'from',
                to: v2183,
                tok: undefined /* Nothing */
                });
              const v3867 = {
                keyInfo: v1910,
                manager: v3677,
                registered: false
                };
              const v7586 = v3867;
              const v7588 = v3862;
              sim_r.isHalt = false;
              
              break;
              }
            }
          break;
          }
        case 'grant0_273': {
          const v3963 = v2184[1];
          
          break;
          }
        case 'nop0_273': {
          const v4259 = v2184[1];
          
          break;
          }
        case 'register0_273': {
          const v4555 = v2184[1];
          
          break;
          }
        case 'touch0_273': {
          const v4851 = v2184[1];
          
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
  const {data: [v2184], secs: v2186, time: v2185, didSend: v1321, from: v2183 } = txn1;
  switch (v2184[0]) {
    case 'arc200_approve0_273': {
      const v2187 = v2184[1];
      return;
      break;
      }
    case 'arc200_transfer0_273': {
      const v2483 = v2184[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_273': {
      const v2779 = v2184[1];
      return;
      break;
      }
    case 'createAllowanceBox0_273': {
      const v3075 = v2184[1];
      return;
      break;
      }
    case 'createBalanceBox0_273': {
      const v3371 = v2184[1];
      return;
      break;
      }
    case 'deregister0_273': {
      const v3667 = v2184[1];
      undefined /* setApiDetails */;
      const v3677 = v1912.manager;
      const v3678 = stdlib.addressEq(v2183, v3677);
      stdlib.assert(v3678, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:329:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:328:28:application call to [unknown function] (defined at: ./index.rsh:328:28:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:328:28:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
        msg: 'ARC200: Only manager can grant',
        who: 'deregister'
        });
      const v3680 = v1912.registered;
      stdlib.assert(v3680, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:330:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:328:28:application call to [unknown function] (defined at: ./index.rsh:328:28:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:328:28:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
        msg: 'Must be registered',
        who: 'deregister'
        });
      const v3682 = v1912.keyInfo;
      const v3683 = {
        None: 0,
        Some: 1
        }[v3682[0]];
      const v3684 = stdlib.eq(v3683, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
      const v3685 = v3684 ? false : true;
      stdlib.assert(v3685, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:331:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:328:28:application call to [unknown function] (defined at: ./index.rsh:328:28:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:328:28:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
        msg: 'Must have key info',
        who: 'deregister'
        });
      const v3701 = stdlib.add(v1916, stdlib.checkedBigNumberify('./index.rsh:333:9:decimal', stdlib.UInt_max, '1000'));
      ;
      switch (v3682[0]) {
        case 'None': {
          const v3836 = v3682[1];
          const v3837 = false;
          const v3838 = await txn1.getOutput('deregister', 'v3837', ctc11, v3837);
          if (v1321) {
            stdlib.protect(ctc0, await interact.out(v3667, v3838), {
              at: './index.rsh:328:11:application',
              fs: ['at ./index.rsh:328:11:application call to [unknown function] (defined at: ./index.rsh:328:11:function exp)', 'at ./index.rsh:344:16:application call to "k" (defined at: ./index.rsh:334:13:function exp)', 'at ./index.rsh:334:13:application call to [unknown function] (defined at: ./index.rsh:334:13:function exp)'],
              msg: 'out',
              who: 'deregister'
              });
            }
          else {
            }
          
          const v7583 = v1912;
          const v7585 = v3701;
          return;
          
          break;
          }
        case 'Some': {
          const v3846 = v3682[1];
          const v3847 = true;
          const v3848 = await txn1.getOutput('deregister', 'v3847', ctc11, v3847);
          if (v1321) {
            stdlib.protect(ctc0, await interact.out(v3667, v3848), {
              at: './index.rsh:328:11:application',
              fs: ['at ./index.rsh:328:11:application call to [unknown function] (defined at: ./index.rsh:328:11:function exp)', 'at ./index.rsh:338:16:application call to "k" (defined at: ./index.rsh:334:13:function exp)', 'at ./index.rsh:334:13:application call to [unknown function] (defined at: ./index.rsh:334:13:function exp)'],
              msg: 'out',
              who: 'deregister'
              });
            }
          else {
            }
          
          null;
          const v3862 = stdlib.sub(v3701, stdlib.checkedBigNumberify('./index.rsh:341:24:decimal', stdlib.UInt_max, '1000'));
          ;
          const v3867 = {
            keyInfo: v1910,
            manager: v3677,
            registered: false
            };
          const v7586 = v3867;
          const v7588 = v3862;
          return;
          
          break;
          }
        }
      break;
      }
    case 'grant0_273': {
      const v3963 = v2184[1];
      return;
      break;
      }
    case 'nop0_273': {
      const v4259 = v2184[1];
      return;
      break;
      }
    case 'register0_273': {
      const v4555 = v2184[1];
      return;
      break;
      }
    case 'touch0_273': {
      const v4851 = v2184[1];
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
  
  
  const [v1891, v1892, v1893, v1896, v1899, v1910, v1912, v1916] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc3, ctc7, ctc1, ctc4, ctc10, ctc12, ctc4]);
  const v2132 = ctc.selfAddress();
  const v2134 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:376:27:application call to [unknown function] (defined at: ./index.rsh:376:27:function exp)', 'at ./index.rsh:163:29:application call to "rungrant0_273" (defined at: ./index.rsh:376:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'in',
    who: 'grant'
    });
  const v2135 = v2134[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2137 = stdlib.addressEq(v2135, v1891);
  const v2138 = v2137 ? false : true;
  stdlib.assert(v2138, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:377:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:376:27:application call to [unknown function] (defined at: ./index.rsh:376:27:function exp)', 'at ./index.rsh:163:29:application call to "rungrant0_273" (defined at: ./index.rsh:376:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'ARC200: Grant zero address',
    who: 'grant'
    });
  const v2140 = v1912.manager;
  const v2141 = stdlib.addressEq(v2135, v2140);
  const v2142 = v2141 ? false : true;
  stdlib.assert(v2142, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:378:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:376:27:application call to [unknown function] (defined at: ./index.rsh:376:27:function exp)', 'at ./index.rsh:163:29:application call to "rungrant0_273" (defined at: ./index.rsh:376:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'ARC200: Grant to manager',
    who: 'grant'
    });
  const v2145 = stdlib.addressEq(v2132, v2140);
  stdlib.assert(v2145, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:379:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:376:27:application call to [unknown function] (defined at: ./index.rsh:376:27:function exp)', 'at ./index.rsh:163:29:application call to "rungrant0_273" (defined at: ./index.rsh:376:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'ARC200: Only manager can grant',
    who: 'grant'
    });
  const v2152 = ['grant0_273', v2134];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1891, v1892, v1893, v1896, v1899, v1910, v1912, v1916, v2152],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [stdlib.checkedBigNumberify('./index.rsh:376:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2184], secs: v2186, time: v2185, didSend: v1321, from: v2183 } = txn1;
      
      switch (v2184[0]) {
        case 'arc200_approve0_273': {
          const v2187 = v2184[1];
          
          break;
          }
        case 'arc200_transfer0_273': {
          const v2483 = v2184[1];
          
          break;
          }
        case 'arc200_transferFrom0_273': {
          const v2779 = v2184[1];
          
          break;
          }
        case 'createAllowanceBox0_273': {
          const v3075 = v2184[1];
          
          break;
          }
        case 'createBalanceBox0_273': {
          const v3371 = v2184[1];
          
          break;
          }
        case 'deregister0_273': {
          const v3667 = v2184[1];
          
          break;
          }
        case 'grant0_273': {
          const v3963 = v2184[1];
          sim_r.txns.push({
            kind: 'api',
            who: "grant"
            });
          ;
          const v4168 = v3963[stdlib.checkedBigNumberify('./index.rsh:376:10:spread', stdlib.UInt_max, '0')];
          const v4180 = null;
          const v4181 = await txn1.getOutput('grant', 'v4180', ctc0, v4180);
          
          const v4187 = v1912.keyInfo;
          const v4189 = v1912.registered;
          const v4190 = {
            keyInfo: v4187,
            manager: v4168,
            registered: v4189
            };
          const v7622 = v4190;
          const v7624 = v1916;
          sim_r.isHalt = false;
          
          break;
          }
        case 'nop0_273': {
          const v4259 = v2184[1];
          
          break;
          }
        case 'register0_273': {
          const v4555 = v2184[1];
          
          break;
          }
        case 'touch0_273': {
          const v4851 = v2184[1];
          
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
  const {data: [v2184], secs: v2186, time: v2185, didSend: v1321, from: v2183 } = txn1;
  switch (v2184[0]) {
    case 'arc200_approve0_273': {
      const v2187 = v2184[1];
      return;
      break;
      }
    case 'arc200_transfer0_273': {
      const v2483 = v2184[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_273': {
      const v2779 = v2184[1];
      return;
      break;
      }
    case 'createAllowanceBox0_273': {
      const v3075 = v2184[1];
      return;
      break;
      }
    case 'createBalanceBox0_273': {
      const v3371 = v2184[1];
      return;
      break;
      }
    case 'deregister0_273': {
      const v3667 = v2184[1];
      return;
      break;
      }
    case 'grant0_273': {
      const v3963 = v2184[1];
      undefined /* setApiDetails */;
      ;
      const v4168 = v3963[stdlib.checkedBigNumberify('./index.rsh:376:10:spread', stdlib.UInt_max, '0')];
      const v4169 = stdlib.addressEq(v4168, v1891);
      const v4170 = v4169 ? false : true;
      stdlib.assert(v4170, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:377:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:381:13:application call to [unknown function] (defined at: ./index.rsh:381:13:function exp)'],
        msg: 'ARC200: Grant zero address',
        who: 'grant'
        });
      const v4172 = v1912.manager;
      const v4173 = stdlib.addressEq(v4168, v4172);
      const v4174 = v4173 ? false : true;
      stdlib.assert(v4174, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:378:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:381:13:application call to [unknown function] (defined at: ./index.rsh:381:13:function exp)'],
        msg: 'ARC200: Grant to manager',
        who: 'grant'
        });
      const v4177 = stdlib.addressEq(v2183, v4172);
      stdlib.assert(v4177, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:379:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:381:13:application call to [unknown function] (defined at: ./index.rsh:381:13:function exp)'],
        msg: 'ARC200: Only manager can grant',
        who: 'grant'
        });
      const v4180 = null;
      const v4181 = await txn1.getOutput('grant', 'v4180', ctc0, v4180);
      if (v1321) {
        stdlib.protect(ctc0, await interact.out(v3963, v4181), {
          at: './index.rsh:376:11:application',
          fs: ['at ./index.rsh:376:11:application call to [unknown function] (defined at: ./index.rsh:376:11:function exp)', 'at ./index.rsh:382:12:application call to "k" (defined at: ./index.rsh:381:13:function exp)', 'at ./index.rsh:381:13:application call to [unknown function] (defined at: ./index.rsh:381:13:function exp)'],
          msg: 'out',
          who: 'grant'
          });
        }
      else {
        }
      
      const v4187 = v1912.keyInfo;
      const v4189 = v1912.registered;
      const v4190 = {
        keyInfo: v4187,
        manager: v4168,
        registered: v4189
        };
      const v7622 = v4190;
      const v7624 = v1916;
      return;
      
      break;
      }
    case 'nop0_273': {
      const v4259 = v2184[1];
      return;
      break;
      }
    case 'register0_273': {
      const v4555 = v2184[1];
      return;
      break;
      }
    case 'touch0_273': {
      const v4851 = v2184[1];
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
  
  
  const [v1891, v1892, v1893, v1896, v1899, v1910, v1912, v1916] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc3, ctc7, ctc1, ctc4, ctc10, ctc12, ctc4]);
  const v2126 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:365:21:application call to [unknown function] (defined at: ./index.rsh:365:21:function exp)', 'at ./index.rsh:163:29:application call to "runnop0_273" (defined at: ./index.rsh:365:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'in',
    who: 'nop'
    });
  const v2130 = ['nop0_273', v2126];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1891, v1892, v1893, v1896, v1899, v1910, v1912, v1916, v2130],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [stdlib.checkedBigNumberify('./index.rsh:365:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2184], secs: v2186, time: v2185, didSend: v1321, from: v2183 } = txn1;
      
      switch (v2184[0]) {
        case 'arc200_approve0_273': {
          const v2187 = v2184[1];
          
          break;
          }
        case 'arc200_transfer0_273': {
          const v2483 = v2184[1];
          
          break;
          }
        case 'arc200_transferFrom0_273': {
          const v2779 = v2184[1];
          
          break;
          }
        case 'createAllowanceBox0_273': {
          const v3075 = v2184[1];
          
          break;
          }
        case 'createBalanceBox0_273': {
          const v3371 = v2184[1];
          
          break;
          }
        case 'deregister0_273': {
          const v3667 = v2184[1];
          
          break;
          }
        case 'grant0_273': {
          const v3963 = v2184[1];
          
          break;
          }
        case 'nop0_273': {
          const v4259 = v2184[1];
          sim_r.txns.push({
            kind: 'api',
            who: "nop"
            });
          ;
          const v4490 = null;
          const v4491 = await txn1.getOutput('nop', 'v4490', ctc0, v4490);
          
          const v7658 = v1912;
          const v7660 = v1916;
          sim_r.isHalt = false;
          
          break;
          }
        case 'register0_273': {
          const v4555 = v2184[1];
          
          break;
          }
        case 'touch0_273': {
          const v4851 = v2184[1];
          
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
  const {data: [v2184], secs: v2186, time: v2185, didSend: v1321, from: v2183 } = txn1;
  switch (v2184[0]) {
    case 'arc200_approve0_273': {
      const v2187 = v2184[1];
      return;
      break;
      }
    case 'arc200_transfer0_273': {
      const v2483 = v2184[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_273': {
      const v2779 = v2184[1];
      return;
      break;
      }
    case 'createAllowanceBox0_273': {
      const v3075 = v2184[1];
      return;
      break;
      }
    case 'createBalanceBox0_273': {
      const v3371 = v2184[1];
      return;
      break;
      }
    case 'deregister0_273': {
      const v3667 = v2184[1];
      return;
      break;
      }
    case 'grant0_273': {
      const v3963 = v2184[1];
      return;
      break;
      }
    case 'nop0_273': {
      const v4259 = v2184[1];
      undefined /* setApiDetails */;
      ;
      const v4490 = null;
      const v4491 = await txn1.getOutput('nop', 'v4490', ctc0, v4490);
      if (v1321) {
        stdlib.protect(ctc0, await interact.out(v4259, v4491), {
          at: './index.rsh:365:11:application',
          fs: ['at ./index.rsh:365:11:application call to [unknown function] (defined at: ./index.rsh:365:11:function exp)', 'at ./index.rsh:368:12:application call to "k" (defined at: ./index.rsh:367:13:function exp)', 'at ./index.rsh:367:13:application call to [unknown function] (defined at: ./index.rsh:367:13:function exp)'],
          msg: 'out',
          who: 'nop'
          });
        }
      else {
        }
      
      const v7658 = v1912;
      const v7660 = v1916;
      return;
      
      break;
      }
    case 'register0_273': {
      const v4555 = v2184[1];
      return;
      break;
      }
    case 'touch0_273': {
      const v4851 = v2184[1];
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
  
  
  const [v1891, v1892, v1893, v1896, v1899, v1910, v1912, v1916] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc3, ctc7, ctc1, ctc4, ctc10, ctc12, ctc4]);
  const v2063 = ctc.selfAddress();
  const v2065 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:299:74:application call to [unknown function] (defined at: ./index.rsh:299:74:function exp)', 'at ./index.rsh:163:29:application call to "runregister0_273" (defined at: ./index.rsh:299:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'in',
    who: 'register'
    });
  const v2078 = v1912.manager;
  const v2079 = stdlib.addressEq(v2063, v2078);
  stdlib.assert(v2079, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:300:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:299:74:application call to [unknown function] (defined at: ./index.rsh:299:74:function exp)', 'at ./index.rsh:163:29:application call to "runregister0_273" (defined at: ./index.rsh:299:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'ARC200: Only manager can grant',
    who: 'register'
    });
  const v2096 = ['register0_273', v2065];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1891, v1892, v1893, v1896, v1899, v1910, v1912, v1916, v2096],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [stdlib.checkedBigNumberify('./index.rsh:302:9:decimal', stdlib.UInt_max, '1000'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2184], secs: v2186, time: v2185, didSend: v1321, from: v2183 } = txn1;
      
      switch (v2184[0]) {
        case 'arc200_approve0_273': {
          const v2187 = v2184[1];
          
          break;
          }
        case 'arc200_transfer0_273': {
          const v2483 = v2184[1];
          
          break;
          }
        case 'arc200_transferFrom0_273': {
          const v2779 = v2184[1];
          
          break;
          }
        case 'createAllowanceBox0_273': {
          const v3075 = v2184[1];
          
          break;
          }
        case 'createBalanceBox0_273': {
          const v3371 = v2184[1];
          
          break;
          }
        case 'deregister0_273': {
          const v3667 = v2184[1];
          
          break;
          }
        case 'grant0_273': {
          const v3963 = v2184[1];
          
          break;
          }
        case 'nop0_273': {
          const v4259 = v2184[1];
          
          break;
          }
        case 'register0_273': {
          const v4555 = v2184[1];
          sim_r.txns.push({
            kind: 'api',
            who: "register"
            });
          const v4584 = v1912.manager;
          const v4589 = stdlib.add(v1916, stdlib.checkedBigNumberify('./index.rsh:302:9:decimal', stdlib.UInt_max, '1000'));
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:302:9:decimal', stdlib.UInt_max, '1000'),
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v4794 = v4555[stdlib.checkedBigNumberify('./index.rsh:299:10:spread', stdlib.UInt_max, '0')];
          const v4795 = v4555[stdlib.checkedBigNumberify('./index.rsh:299:10:spread', stdlib.UInt_max, '1')];
          const v4796 = v4555[stdlib.checkedBigNumberify('./index.rsh:299:10:spread', stdlib.UInt_max, '2')];
          const v4797 = v4555[stdlib.checkedBigNumberify('./index.rsh:299:10:spread', stdlib.UInt_max, '3')];
          const v4798 = v4555[stdlib.checkedBigNumberify('./index.rsh:299:10:spread', stdlib.UInt_max, '4')];
          const v4799 = v4555[stdlib.checkedBigNumberify('./index.rsh:299:10:spread', stdlib.UInt_max, '5')];
          const v4809 = true;
          const v4810 = await txn1.getOutput('register', 'v4809', ctc11, v4809);
          
          const v4821 = {
            selkey: v4795,
            spkey: v4796,
            votefst: v4797,
            votekd: v4799,
            votekey: v4794,
            votelst: v4798
            };
          null;
          null;
          null;
          null;
          null;
          null;
          null;
          const v4825 = stdlib.sub(v4589, stdlib.checkedBigNumberify('./index.rsh:321:20:decimal', stdlib.UInt_max, '1000'));
          sim_r.txns.push({
            kind: 'from',
            to: v2183,
            tok: undefined /* Nothing */
            });
          const v4830 = ['Some', v4821];
          const v4831 = {
            keyInfo: v4830,
            manager: v4584,
            registered: true
            };
          const v7694 = v4831;
          const v7696 = v4825;
          sim_r.isHalt = false;
          
          break;
          }
        case 'touch0_273': {
          const v4851 = v2184[1];
          
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
  const {data: [v2184], secs: v2186, time: v2185, didSend: v1321, from: v2183 } = txn1;
  switch (v2184[0]) {
    case 'arc200_approve0_273': {
      const v2187 = v2184[1];
      return;
      break;
      }
    case 'arc200_transfer0_273': {
      const v2483 = v2184[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_273': {
      const v2779 = v2184[1];
      return;
      break;
      }
    case 'createAllowanceBox0_273': {
      const v3075 = v2184[1];
      return;
      break;
      }
    case 'createBalanceBox0_273': {
      const v3371 = v2184[1];
      return;
      break;
      }
    case 'deregister0_273': {
      const v3667 = v2184[1];
      return;
      break;
      }
    case 'grant0_273': {
      const v3963 = v2184[1];
      return;
      break;
      }
    case 'nop0_273': {
      const v4259 = v2184[1];
      return;
      break;
      }
    case 'register0_273': {
      const v4555 = v2184[1];
      undefined /* setApiDetails */;
      const v4584 = v1912.manager;
      const v4585 = stdlib.addressEq(v2183, v4584);
      stdlib.assert(v4585, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:300:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:299:74:application call to [unknown function] (defined at: ./index.rsh:299:74:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:299:74:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
        msg: 'ARC200: Only manager can grant',
        who: 'register'
        });
      const v4589 = stdlib.add(v1916, stdlib.checkedBigNumberify('./index.rsh:302:9:decimal', stdlib.UInt_max, '1000'));
      ;
      const v4794 = v4555[stdlib.checkedBigNumberify('./index.rsh:299:10:spread', stdlib.UInt_max, '0')];
      const v4795 = v4555[stdlib.checkedBigNumberify('./index.rsh:299:10:spread', stdlib.UInt_max, '1')];
      const v4796 = v4555[stdlib.checkedBigNumberify('./index.rsh:299:10:spread', stdlib.UInt_max, '2')];
      const v4797 = v4555[stdlib.checkedBigNumberify('./index.rsh:299:10:spread', stdlib.UInt_max, '3')];
      const v4798 = v4555[stdlib.checkedBigNumberify('./index.rsh:299:10:spread', stdlib.UInt_max, '4')];
      const v4799 = v4555[stdlib.checkedBigNumberify('./index.rsh:299:10:spread', stdlib.UInt_max, '5')];
      const v4809 = true;
      const v4810 = await txn1.getOutput('register', 'v4809', ctc11, v4809);
      if (v1321) {
        stdlib.protect(ctc0, await interact.out(v4555, v4810), {
          at: './index.rsh:299:11:application',
          fs: ['at ./index.rsh:299:11:application call to [unknown function] (defined at: ./index.rsh:299:11:function exp)', 'at ./index.rsh:304:12:application call to "k" (defined at: ./index.rsh:303:13:function exp)', 'at ./index.rsh:303:13:application call to [unknown function] (defined at: ./index.rsh:303:13:function exp)'],
          msg: 'out',
          who: 'register'
          });
        }
      else {
        }
      
      const v4821 = {
        selkey: v4795,
        spkey: v4796,
        votefst: v4797,
        votekd: v4799,
        votekey: v4794,
        votelst: v4798
        };
      null;
      null;
      null;
      null;
      null;
      null;
      null;
      const v4825 = stdlib.sub(v4589, stdlib.checkedBigNumberify('./index.rsh:321:20:decimal', stdlib.UInt_max, '1000'));
      ;
      const v4830 = ['Some', v4821];
      const v4831 = {
        keyInfo: v4830,
        manager: v4584,
        registered: true
        };
      const v7694 = v4831;
      const v7696 = v4825;
      return;
      
      break;
      }
    case 'touch0_273': {
      const v4851 = v2184[1];
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
  
  
  const [v1891, v1892, v1893, v1896, v1899, v1910, v1912, v1916] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc3, ctc7, ctc1, ctc4, ctc10, ctc12, ctc4]);
  const v2118 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:353:23:application call to [unknown function] (defined at: ./index.rsh:353:23:function exp)', 'at ./index.rsh:163:29:application call to "runtouch0_273" (defined at: ./index.rsh:353:10:function exp)', 'at ./index.rsh:163:29:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'in',
    who: 'touch'
    });
  const v2122 = ['touch0_273', v2118];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1891, v1892, v1893, v1896, v1899, v1910, v1912, v1916, v2122],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [stdlib.checkedBigNumberify('./index.rsh:353:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v2184], secs: v2186, time: v2185, didSend: v1321, from: v2183 } = txn1;
      
      switch (v2184[0]) {
        case 'arc200_approve0_273': {
          const v2187 = v2184[1];
          
          break;
          }
        case 'arc200_transfer0_273': {
          const v2483 = v2184[1];
          
          break;
          }
        case 'arc200_transferFrom0_273': {
          const v2779 = v2184[1];
          
          break;
          }
        case 'createAllowanceBox0_273': {
          const v3075 = v2184[1];
          
          break;
          }
        case 'createBalanceBox0_273': {
          const v3371 = v2184[1];
          
          break;
          }
        case 'deregister0_273': {
          const v3667 = v2184[1];
          
          break;
          }
        case 'grant0_273': {
          const v3963 = v2184[1];
          
          break;
          }
        case 'nop0_273': {
          const v4259 = v2184[1];
          
          break;
          }
        case 'register0_273': {
          const v4555 = v2184[1];
          
          break;
          }
        case 'touch0_273': {
          const v4851 = v2184[1];
          sim_r.txns.push({
            kind: 'api',
            who: "touch"
            });
          ;
          const v5134 = (stdlib.le(await ctc.getBalance(), v1916) ? stdlib.checkedBigNumberify('./index.rsh:356:39:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v1916));
          const v5135 = stdlib.safeAdd(v5134, v1916);
          const v5136 = v1912.manager;
          const v5140 = stdlib.sub(v5135, v5134);
          sim_r.txns.push({
            kind: 'from',
            to: v5136,
            tok: undefined /* Nothing */
            });
          const v5141 = await txn1.getOutput('touch', 'v5134', ctc4, v5134);
          
          const v7730 = v1912;
          const v7732 = v5140;
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
  const {data: [v2184], secs: v2186, time: v2185, didSend: v1321, from: v2183 } = txn1;
  switch (v2184[0]) {
    case 'arc200_approve0_273': {
      const v2187 = v2184[1];
      return;
      break;
      }
    case 'arc200_transfer0_273': {
      const v2483 = v2184[1];
      return;
      break;
      }
    case 'arc200_transferFrom0_273': {
      const v2779 = v2184[1];
      return;
      break;
      }
    case 'createAllowanceBox0_273': {
      const v3075 = v2184[1];
      return;
      break;
      }
    case 'createBalanceBox0_273': {
      const v3371 = v2184[1];
      return;
      break;
      }
    case 'deregister0_273': {
      const v3667 = v2184[1];
      return;
      break;
      }
    case 'grant0_273': {
      const v3963 = v2184[1];
      return;
      break;
      }
    case 'nop0_273': {
      const v4259 = v2184[1];
      return;
      break;
      }
    case 'register0_273': {
      const v4555 = v2184[1];
      return;
      break;
      }
    case 'touch0_273': {
      const v4851 = v2184[1];
      undefined /* setApiDetails */;
      ;
      const v5134 = (stdlib.le(await ctc.getBalance(), v1916) ? stdlib.checkedBigNumberify('./index.rsh:356:39:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v1916));
      const v5135 = stdlib.safeAdd(v5134, v1916);
      const v5136 = v1912.manager;
      const v5140 = stdlib.sub(v5135, v5134);
      ;
      const v5141 = await txn1.getOutput('touch', 'v5134', ctc4, v5134);
      if (v1321) {
        stdlib.protect(ctc0, await interact.out(v4851, v5141), {
          at: './index.rsh:353:11:application',
          fs: ['at ./index.rsh:353:11:application call to [unknown function] (defined at: ./index.rsh:353:11:function exp)', 'at ./index.rsh:358:12:application call to "k" (defined at: ./index.rsh:355:13:function exp)', 'at ./index.rsh:355:13:application call to [unknown function] (defined at: ./index.rsh:355:13:function exp)'],
          msg: 'out',
          who: 'touch'
          });
        }
      else {
        }
      
      const v7730 = v1912;
      const v7732 = v5140;
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
  appApproval: `CSAKAAMB6AcI1N4BxNsBWHgCJgkBAAAIAAAAAAAAAAEBAQECAQMBBAR5g8NcBBlp+GUxGEEJzilkSSJbNQEhBFs1AihkK2RQJwRkUCcFZFAnBmRQghgEtUIhJQQtfXwqBDNujV8EPCpXoQRSHi1hBFNZxMUEWHWfogSE7BPVBGV9E+wEZdjoCQRnQ0AxBHn1sI0EguVzxASjWeR1BLauGiUEu7MZ8wTHpHf4BEqWj48E0lyQIgTXYQFSBNhR3icE7JlgQQTacCW5BPtutXM2GgCOGAkwCXMK/Aj3CsQJkwqaCUUJSAmICpcJiwk9CYAJSwkjCOUJUQrBCp0JcAlOCWMKzAA0C1cAIDUNNAtXICA1DDEANBYTRDQNNBYTRCEGKjEANA1QUAE0DIgLFicIMQBQNA1QNAxQsCQ1C4AIAAAAAAAACLo0CxZRBwhQsDQLgQeQFlEHCDUEMgY1DzQWNBVQNBRQNBNQNBIWUDQRUDQQUDQOFlAjMgY1AjUBKEsBVwB/ZytLAVd/f2cnBEsBV/5/ZycFSwGB/QKBf1hnJwZMgfwDgRdYZyk0ARY0AhZQZzEZIhJEiArKNANAAAqABBUffHU0BFCwJEM0C1cAIDUNNAtXICA1DDIDKTIDKDEAUIgKVIgKakk1FzQMp0QkNQuACAAAAAAAAAn1NAsWUQcIULA0C4EHkBZRBwg1BCEFKDEAUDQXNAyhiAo+iAokIQUoNA1QMgMpMgMoNA1QiAoHiAodNAygiAogiAoGJwcxAFA0DVA0DFCwMgY1D0L/DTQLVwAgNRc0C1cgIDUNNAtXQCA1DDIDKTIDKDQXUIgJx4gJ3Uk1GTQMp0Q0FzEAUDUYMgMpMgMqNBhQAYgJqYgJv0k1CzQMp0QhBSg0F1A0GTQMoYgJs4gJmSEFKDQNUDIDKTIDKDQNUIgJfIgJkjQMoIgJlYgJeycHNBdQNA1QNAxQsDQLNAyhiAl+NQ0hBio0GFABNA2ICVknCDQXUDEAUDQNULAkNQuACAAAAAAAAAtLNAsWUQcIULA0C4EHkBZRBwg1BDIGNQ9C/kA0C1cAIDQLVyAgUDUMKTIDKjQMUAGICQMiVSISRCEGKjQMUAEyA4gI/SQ1C4AIAAAAAAAADIg0CxZRBwhQsDQLFlEHCDUEMgY1D0L98zQNVwEgNQspMgMoNAtQiAi9IlUiEkQhBSg0C1AyA4gIuCQ1C4AIAAAAAAAADcA0CxZRBwhQsDQLFlEHCDUEMgY1D0L9rjQQV5kgNRcxADQXEkQ0EFe5ARdENBBXAJlJNQsiVUQ0DiUINQ0liAiQiAi6NAsiVY0CBvoHIkL9GzQNVwEgSTULNBYTRDQQV5kgNQw0CzQME0QxADQMEkQpNQyACAAAAAAAABBUNAxQsDQMNQQ0EFcAmTQLUDQQV7kBUDIGNQ81EEL9Kik1C4AIAAAAAAAAEYo0C1CwNAs1BDIGNQ9C/Q40EFeZIDUbMQA0GxJEJYgICDQLVwAgNRo0C1cgIDUZNAtXQEA1GDQLgYABWzUXNAuBiAFbNQ00C4GQAVs1DCQ1C4AIAAAAAAAAEsk0CxZRBwhQsDQLFlEHCDUENBo0GVA0GFA0FxZQNA0WUDQMFlA1C4AENXZsETQLULCABMU9sC40GlCwgASFHshhNBlQsIAEJ8cM7jQYULCABHBzUdA0FxZQsIAEwsceCDQNFlCwgAQpdSfsNAwWULAlMQCIB1WIB40rNAtQNBtQK1AyBjQOJQglCTUONQ81EEL8MTIKYDIKeAk0DglJNQs0EFeZIIgHI4AIAAAAAAAAFA40CxZQsDQLFjUEMgY0CzQOCDQLCTUONQ9C+/c0ASMSRIgGlDIDKTIDKjQMNAtQUAGIBrqIBtA1BDEZIhJEQvwzIQSvKDQMNAtQUCEHr1BQNQsjNAESRIgGXjQLIls1DDQLVwiZNQ2ABHfKP6Q0DBZQNA1QsDQMiAa1NA0iVY0KBMAEygTUBN4E6ATrBO4E8QT0BP5C+yI0ASMSRIgGGTIDKTIDKDQLUIgGQ4gGWTUEQv+GNAEjEkSIBf00EhZXBwA1BEL/czQBIxJEiAXqNBRXCCA1BEL/YTQBIxJEiAXYNBRXKAg1BEL/TzQBIxJEiAXGNBM1BEL/QCEErys0DDQLUFAhB69QUDULQv9FIQSvJwQ0DTQMUDQLUFCBOK9QUDULQv8tNAEjEkSIBYs0FTUEQv8FIQSvJwU0DDQLUFAhB69QUDULQv8JIQSvJwY0C1AhCK9QUDULQv73gKEBAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1C0L+TiEEr4ABBjQLUCEIr1BQNQtC/js0ASMSRIgEmTQLSTUMIlWNAgP3BA5C+Yo0ASMSRIgEgTQQV5kgNQRC/fiAoQEAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADULQv1oIQSvgAEINBA0D1A0DlA0DRZQNAwWUDQLFlBQUDULQv1HNAEjEkSIA6U0EFeZIDQQV7kBUDQQVwCZUDUEQv0QNAEjEkSIA4eAIOhHJSwrFSuRyyUA7tHv3RW6kGAgxGcEe6/FMsZo8y2ANAsBEhZRBwg1BEL82YChAQAAAAAAAAAACQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQtC/Ek0ASMSRIgCpzQWNQRC/CE0CyJbNQw0C1cIIDUWNAtXKCA1FTQLV0hQNRSABJvLfD80DBZQNBZQNBVQNBRQsDQMiALjNBRXMCBJNRMyA6VENBQiW0k1EoGAAg5EIQUoNBVQNBOIAoohBSg0FlAyA4gCfycHNBZQNBVQNBNQsIGZAa9JNRE0FVAoUDIGIjUONQ81EEL3dYgCioGgjQaIAp02GgE1C0L/aIgCeDYaATULQvuXIjE0EkSBBjE1EkQiMTYSRCIxNxJEiAJYgZMEryIiQvdTNhoBNhoCNQs1DEL7MzYaATYaAjULNQxC+0s2GgE1C0L7mUL7skL7wkL70UL74DYaATYaAjYaAzULNQw1DUL78TYaATYaAjULNQxC+9BC+/k2GgE2GgI1CzUMQvv7NhoBNQtC/AhC/Bc2GgE1C0L8uDYaATULQvzDNA1XAUA1C0L2XDQNVwFANQtC9xg0DVcBYDULQveUNA1XAUA1C0L4V0L4oUL440L5GUL5YTQNVwGYNQtC+XNC+k0iNQuACAAAAAAAAA79NAsWUQcIULA0CxZRBwg1BDIGNA01DjUPQvZWNAtXAZg1DCQ1C4AIAAAAAAAADwc0CxZRBwhQsDQLFlEHCDUEgATW1mBMNAxQsCUxAIgBKTQRNBdQKFAyBjQNJQk1DjUPNRBC9gxITL9IiSKyASSyELIHsgiziTQLFlEHCDUEQvoWKTIDKjQMVwFAUAGIAL0iVSQSNQtC/94pMgMoNAxXASBQiACnIlUkEjULQv/IQvvcQvvrNhoBNhoCNhoDNhoEFzYaBRc2GgYXNQs1DDUNNQ41DzUQQvxwQvyONhoBNQtC/KRC/NhIiUwJSTUGMgmIAIaJCUlB/+5JNQaIAH6JMRmBBRJEiACPIjIKMgmIAMVC9bpC/VFJVwAgNRZJVyAgNRVJV0BQNRRJV5AgNRNJgbABWzUSSVe4mTURSYHRAoG6AVg1EIGLBFs1Dom+SRZRBwhFBE1QiUxJvUD/CEsDiABBQv8ASVcBAEwiVU2JSRWBIEwJr0xQibFC/u4xFjQAJAhJNQAJRwKJJDUDiUkiEkw0AhIRRIk0BjQHSg9B/0hC/1A0Bgg1BomxIQmyECKyAbOJsSEJshA0GbILNBqyCjQYsj80F7IMNA2yDTQMsg4lsgGzibGyCUL+jw==`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `30`,
    1000: `512`,
    1001: `512`,
    1002: `513`,
    1003: `513`,
    1004: `513`,
    1005: `514`,
    1006: `514`,
    1007: `515`,
    1008: `515`,
    1009: `516`,
    101: `30`,
    1010: `516`,
    1011: `517`,
    1012: `518`,
    1013: `523`,
    1014: `523`,
    1015: `524`,
    1016: `524`,
    1017: `525`,
    1018: `526`,
    1019: `531`,
    102: `30`,
    1020: `532`,
    1021: `532`,
    1022: `533`,
    1023: `533`,
    1024: `533`,
    1025: `533`,
    1026: `533`,
    1027: `533`,
    1028: `533`,
    1029: `533`,
    103: `30`,
    1030: `533`,
    1031: `533`,
    1032: `534`,
    1033: `534`,
    1034: `535`,
    1035: `536`,
    1036: `537`,
    1037: `537`,
    1038: `538`,
    1039: `538`,
    104: `30`,
    1040: `539`,
    1041: `539`,
    1042: `540`,
    1043: `540`,
    1044: `540`,
    1045: `541`,
    1046: `541`,
    1047: `542`,
    1048: `543`,
    1049: `543`,
    105: `30`,
    1050: `544`,
    1051: `544`,
    1052: `544`,
    1053: `545`,
    1054: `546`,
    1055: `546`,
    1056: `547`,
    1057: `547`,
    1058: `548`,
    1059: `548`,
    106: `30`,
    1060: `549`,
    1061: `549`,
    1062: `549`,
    1063: `551`,
    1064: `552`,
    1065: `552`,
    1066: `553`,
    1067: `553`,
    1068: `553`,
    1069: `553`,
    107: `30`,
    1070: `553`,
    1071: `553`,
    1072: `553`,
    1073: `553`,
    1074: `553`,
    1075: `553`,
    1076: `554`,
    1077: `554`,
    1078: `555`,
    1079: `556`,
    108: `30`,
    1080: `557`,
    1081: `557`,
    1082: `558`,
    1083: `558`,
    1084: `559`,
    1085: `559`,
    1086: `560`,
    1087: `560`,
    1088: `561`,
    1089: `561`,
    109: `30`,
    1090: `561`,
    1091: `563`,
    1092: `563`,
    1093: `564`,
    1094: `564`,
    1095: `564`,
    1096: `565`,
    1097: `565`,
    1098: `566`,
    1099: `566`,
    11: `2`,
    110: `30`,
    1100: `567`,
    1101: `567`,
    1102: `568`,
    1103: `569`,
    1104: `576`,
    1105: `576`,
    1106: `577`,
    1107: `577`,
    1108: `577`,
    1109: `580`,
    111: `30`,
    1110: `580`,
    1111: `581`,
    1112: `581`,
    1113: `581`,
    1114: `582`,
    1115: `582`,
    1116: `583`,
    1117: `583`,
    1118: `584`,
    1119: `584`,
    112: `30`,
    1120: `584`,
    1121: `585`,
    1122: `585`,
    1123: `586`,
    1124: `586`,
    1125: `587`,
    1126: `587`,
    1127: `587`,
    1128: `588`,
    1129: `588`,
    113: `30`,
    1130: `589`,
    1131: `589`,
    1132: `590`,
    1133: `590`,
    1134: `590`,
    1135: `591`,
    1136: `592`,
    1137: `592`,
    1138: `593`,
    1139: `593`,
    114: `30`,
    1140: `594`,
    1141: `594`,
    1142: `594`,
    1143: `595`,
    1144: `596`,
    1145: `596`,
    1146: `597`,
    1147: `597`,
    1148: `598`,
    1149: `598`,
    115: `30`,
    1150: `598`,
    1151: `599`,
    1152: `600`,
    1153: `600`,
    1154: `601`,
    1155: `602`,
    1156: `602`,
    1157: `603`,
    1158: `603`,
    1159: `603`,
    116: `30`,
    1160: `603`,
    1161: `603`,
    1162: `603`,
    1163: `603`,
    1164: `603`,
    1165: `603`,
    1166: `603`,
    1167: `604`,
    1168: `604`,
    1169: `605`,
    117: `30`,
    1170: `606`,
    1171: `606`,
    1172: `606`,
    1173: `607`,
    1174: `608`,
    1175: `609`,
    1176: `609`,
    1177: `610`,
    1178: `611`,
    1179: `611`,
    118: `30`,
    1180: `611`,
    1181: `612`,
    1182: `612`,
    1183: `613`,
    1184: `613`,
    1185: `614`,
    1186: `614`,
    1187: `615`,
    1188: `616`,
    1189: `616`,
    119: `30`,
    1190: `617`,
    1191: `618`,
    1192: `618`,
    1193: `619`,
    1194: `620`,
    1195: `621`,
    1196: `621`,
    1197: `622`,
    1198: `623`,
    1199: `624`,
    12: `2`,
    120: `30`,
    1200: `624`,
    1201: `625`,
    1202: `626`,
    1203: `627`,
    1204: `627`,
    1205: `628`,
    1206: `628`,
    1207: `628`,
    1208: `628`,
    1209: `628`,
    121: `30`,
    1210: `628`,
    1211: `629`,
    1212: `629`,
    1213: `630`,
    1214: `631`,
    1215: `633`,
    1216: `633`,
    1217: `633`,
    1218: `633`,
    1219: `633`,
    122: `30`,
    1220: `633`,
    1221: `634`,
    1222: `634`,
    1223: `635`,
    1224: `636`,
    1225: `638`,
    1226: `638`,
    1227: `638`,
    1228: `638`,
    1229: `638`,
    123: `30`,
    1230: `638`,
    1231: `639`,
    1232: `639`,
    1233: `640`,
    1234: `641`,
    1235: `643`,
    1236: `643`,
    1237: `643`,
    1238: `643`,
    1239: `643`,
    124: `30`,
    1240: `643`,
    1241: `644`,
    1242: `644`,
    1243: `645`,
    1244: `646`,
    1245: `648`,
    1246: `648`,
    1247: `648`,
    1248: `648`,
    1249: `648`,
    125: `30`,
    1250: `648`,
    1251: `649`,
    1252: `649`,
    1253: `650`,
    1254: `651`,
    1255: `652`,
    1256: `654`,
    1257: `654`,
    1258: `654`,
    1259: `654`,
    126: `30`,
    1260: `654`,
    1261: `654`,
    1262: `655`,
    1263: `655`,
    1264: `656`,
    1265: `657`,
    1266: `658`,
    1267: `660`,
    1268: `660`,
    1269: `660`,
    127: `30`,
    1270: `660`,
    1271: `660`,
    1272: `660`,
    1273: `661`,
    1274: `661`,
    1275: `662`,
    1276: `663`,
    1277: `664`,
    1278: `666`,
    1279: `666`,
    128: `30`,
    1280: `667`,
    1281: `667`,
    1282: `668`,
    1283: `668`,
    1284: `668`,
    1285: `669`,
    1286: `670`,
    1287: `670`,
    1288: `671`,
    1289: `672`,
    129: `30`,
    1290: `672`,
    1291: `673`,
    1292: `674`,
    1293: `675`,
    1294: `676`,
    1295: `676`,
    1296: `677`,
    1297: `677`,
    1298: `678`,
    1299: `678`,
    13: `2`,
    130: `30`,
    1300: `679`,
    1301: `680`,
    1302: `680`,
    1303: `681`,
    1304: `682`,
    1305: `682`,
    1306: `683`,
    1307: `683`,
    1308: `684`,
    1309: `684`,
    131: `30`,
    1310: `685`,
    1311: `685`,
    1312: `685`,
    1313: `687`,
    1314: `687`,
    1315: `688`,
    1316: `689`,
    1317: `689`,
    1318: `690`,
    1319: `691`,
    132: `30`,
    1320: `692`,
    1321: `692`,
    1322: `693`,
    1323: `695`,
    1324: `696`,
    1325: `696`,
    1326: `698`,
    1327: `698`,
    1328: `699`,
    1329: `699`,
    133: `30`,
    1330: `699`,
    1331: `700`,
    1332: `700`,
    1333: `700`,
    1334: `701`,
    1335: `701`,
    1336: `701`,
    1337: `701`,
    1338: `701`,
    1339: `701`,
    134: `30`,
    1340: `701`,
    1341: `701`,
    1342: `701`,
    1343: `701`,
    1344: `702`,
    1345: `702`,
    1346: `703`,
    1347: `704`,
    1348: `705`,
    1349: `706`,
    135: `30`,
    1350: `706`,
    1351: `707`,
    1352: `708`,
    1353: `708`,
    1354: `709`,
    1355: `709`,
    1356: `710`,
    1357: `710`,
    1358: `711`,
    1359: `711`,
    136: `30`,
    1360: `712`,
    1361: `713`,
    1362: `713`,
    1363: `714`,
    1364: `715`,
    1365: `715`,
    1366: `716`,
    1367: `716`,
    1368: `717`,
    1369: `717`,
    137: `30`,
    1370: `717`,
    1371: `719`,
    1372: `719`,
    1373: `720`,
    1374: `721`,
    1375: `722`,
    1376: `725`,
    1377: `725`,
    1378: `725`,
    1379: `726`,
    138: `30`,
    1380: `726`,
    1381: `728`,
    1382: `729`,
    1383: `729`,
    1384: `730`,
    1385: `731`,
    1386: `731`,
    1387: `732`,
    1388: `732`,
    1389: `733`,
    139: `30`,
    1390: `734`,
    1391: `735`,
    1392: `736`,
    1393: `736`,
    1394: `736`,
    1395: `737`,
    1396: `737`,
    1397: `737`,
    1398: `738`,
    1399: `738`,
    14: `2`,
    140: `30`,
    1400: `740`,
    1401: `740`,
    1402: `741`,
    1403: `742`,
    1404: `743`,
    1405: `745`,
    1406: `745`,
    1407: `745`,
    1408: `747`,
    1409: `748`,
    141: `30`,
    1410: `749`,
    1411: `750`,
    1412: `750`,
    1413: `751`,
    1414: `751`,
    1415: `752`,
    1416: `753`,
    1417: `754`,
    1418: `754`,
    1419: `755`,
    142: `30`,
    1420: `756`,
    1421: `757`,
    1422: `758`,
    1423: `758`,
    1424: `760`,
    1425: `761`,
    1426: `761`,
    1427: `762`,
    1428: `763`,
    1429: `764`,
    143: `30`,
    1430: `764`,
    1431: `764`,
    1432: `765`,
    1433: `765`,
    1434: `766`,
    1435: `767`,
    1436: `768`,
    1437: `768`,
    1438: `769`,
    1439: `769`,
    144: `30`,
    1440: `770`,
    1441: `770`,
    1442: `770`,
    1443: `771`,
    1444: `771`,
    1445: `772`,
    1446: `772`,
    1447: `772`,
    1448: `772`,
    1449: `772`,
    145: `30`,
    1450: `772`,
    1451: `773`,
    1452: `773`,
    1453: `774`,
    1454: `775`,
    1455: `776`,
    1456: `776`,
    1457: `777`,
    1458: `778`,
    1459: `780`,
    146: `30`,
    1460: `780`,
    1461: `781`,
    1462: `781`,
    1463: `781`,
    1464: `782`,
    1465: `782`,
    1466: `783`,
    1467: `784`,
    1468: `785`,
    1469: `785`,
    147: `30`,
    1470: `785`,
    1471: `785`,
    1472: `785`,
    1473: `785`,
    1474: `785`,
    1475: `785`,
    1476: `785`,
    1477: `785`,
    1478: `785`,
    1479: `785`,
    148: `30`,
    1480: `785`,
    1481: `785`,
    1482: `785`,
    1483: `785`,
    1484: `785`,
    1485: `785`,
    1486: `785`,
    1487: `785`,
    1488: `785`,
    1489: `785`,
    149: `30`,
    1490: `786`,
    1491: `786`,
    1492: `786`,
    1493: `788`,
    1494: `788`,
    1495: `789`,
    1496: `790`,
    1497: `791`,
    1498: `794`,
    1499: `794`,
    15: `2`,
    150: `30`,
    1500: `794`,
    1501: `795`,
    1502: `795`,
    1503: `797`,
    1504: `798`,
    1505: `798`,
    1506: `799`,
    1507: `800`,
    1508: `800`,
    1509: `801`,
    151: `30`,
    1510: `802`,
    1511: `802`,
    1512: `802`,
    1513: `803`,
    1514: `803`,
    1515: `803`,
    1516: `804`,
    1517: `804`,
    1518: `805`,
    1519: `805`,
    152: `30`,
    1520: `805`,
    1521: `807`,
    1522: `807`,
    1523: `808`,
    1524: `809`,
    1525: `810`,
    1526: `813`,
    1527: `813`,
    1528: `813`,
    1529: `814`,
    153: `30`,
    1530: `814`,
    1531: `815`,
    1532: `816`,
    1533: `816`,
    1534: `817`,
    1535: `817`,
    1536: `817`,
    1537: `819`,
    1538: `819`,
    1539: `820`,
    154: `30`,
    1540: `821`,
    1541: `822`,
    1542: `825`,
    1543: `825`,
    1544: `825`,
    1545: `826`,
    1546: `826`,
    1547: `827`,
    1548: `827`,
    1549: `827`,
    155: `30`,
    1550: `828`,
    1551: `828`,
    1552: `829`,
    1553: `829`,
    1554: `829`,
    1555: `831`,
    1556: `831`,
    1557: `832`,
    1558: `833`,
    1559: `834`,
    156: `30`,
    1560: `837`,
    1561: `837`,
    1562: `837`,
    1563: `838`,
    1564: `838`,
    1565: `839`,
    1566: `839`,
    1567: `839`,
    1568: `840`,
    1569: `840`,
    157: `30`,
    1570: `841`,
    1571: `841`,
    1572: `841`,
    1573: `843`,
    1574: `843`,
    1575: `844`,
    1576: `845`,
    1577: `846`,
    1578: `849`,
    1579: `849`,
    158: `30`,
    1580: `849`,
    1581: `850`,
    1582: `850`,
    1583: `851`,
    1584: `851`,
    1585: `852`,
    1586: `852`,
    1587: `852`,
    1588: `854`,
    1589: `855`,
    159: `30`,
    1590: `856`,
    1591: `857`,
    1592: `857`,
    1593: `858`,
    1594: `858`,
    1595: `859`,
    1596: `860`,
    1597: `861`,
    1598: `861`,
    1599: `862`,
    16: `2`,
    160: `30`,
    1600: `863`,
    1601: `864`,
    1602: `865`,
    1603: `865`,
    1604: `866`,
    1605: `866`,
    1606: `866`,
    1607: `868`,
    1608: `869`,
    1609: `870`,
    161: `30`,
    1610: `870`,
    1611: `871`,
    1612: `871`,
    1613: `872`,
    1614: `872`,
    1615: `873`,
    1616: `874`,
    1617: `874`,
    1618: `875`,
    1619: `876`,
    162: `30`,
    1620: `877`,
    1621: `877`,
    1622: `878`,
    1623: `879`,
    1624: `880`,
    1625: `881`,
    1626: `881`,
    1627: `882`,
    1628: `882`,
    1629: `882`,
    163: `30`,
    1630: `884`,
    1631: `884`,
    1632: `885`,
    1633: `886`,
    1634: `887`,
    1635: `890`,
    1636: `890`,
    1637: `890`,
    1638: `891`,
    1639: `891`,
    164: `30`,
    1640: `892`,
    1641: `892`,
    1642: `893`,
    1643: `893`,
    1644: `893`,
    1645: `895`,
    1646: `896`,
    1647: `897`,
    1648: `897`,
    1649: `898`,
    165: `30`,
    1650: `898`,
    1651: `899`,
    1652: `899`,
    1653: `900`,
    1654: `901`,
    1655: `902`,
    1656: `902`,
    1657: `903`,
    1658: `904`,
    1659: `905`,
    166: `30`,
    1660: `906`,
    1661: `906`,
    1662: `907`,
    1663: `907`,
    1664: `907`,
    1665: `909`,
    1666: `910`,
    1667: `911`,
    1668: `911`,
    1669: `912`,
    167: `30`,
    1670: `912`,
    1671: `913`,
    1672: `914`,
    1673: `914`,
    1674: `915`,
    1675: `916`,
    1676: `917`,
    1677: `918`,
    1678: `918`,
    1679: `919`,
    168: `30`,
    1680: `919`,
    1681: `919`,
    1682: `921`,
    1683: `921`,
    1684: `921`,
    1685: `921`,
    1686: `921`,
    1687: `921`,
    1688: `921`,
    1689: `921`,
    169: `30`,
    1690: `921`,
    1691: `921`,
    1692: `921`,
    1693: `921`,
    1694: `921`,
    1695: `921`,
    1696: `921`,
    1697: `921`,
    1698: `921`,
    1699: `921`,
    17: `2`,
    170: `30`,
    1700: `921`,
    1701: `921`,
    1702: `921`,
    1703: `921`,
    1704: `921`,
    1705: `921`,
    1706: `921`,
    1707: `921`,
    1708: `921`,
    1709: `921`,
    171: `30`,
    1710: `921`,
    1711: `921`,
    1712: `921`,
    1713: `921`,
    1714: `921`,
    1715: `921`,
    1716: `921`,
    1717: `921`,
    1718: `921`,
    1719: `921`,
    172: `30`,
    1720: `921`,
    1721: `921`,
    1722: `921`,
    1723: `921`,
    1724: `921`,
    1725: `921`,
    1726: `921`,
    1727: `921`,
    1728: `921`,
    1729: `921`,
    173: `30`,
    1730: `921`,
    1731: `921`,
    1732: `921`,
    1733: `921`,
    1734: `921`,
    1735: `921`,
    1736: `921`,
    1737: `921`,
    1738: `921`,
    1739: `921`,
    174: `30`,
    1740: `921`,
    1741: `921`,
    1742: `921`,
    1743: `921`,
    1744: `921`,
    1745: `921`,
    1746: `921`,
    1747: `921`,
    1748: `921`,
    1749: `921`,
    175: `30`,
    1750: `921`,
    1751: `921`,
    1752: `921`,
    1753: `921`,
    1754: `921`,
    1755: `921`,
    1756: `921`,
    1757: `921`,
    1758: `921`,
    1759: `921`,
    176: `30`,
    1760: `921`,
    1761: `921`,
    1762: `921`,
    1763: `921`,
    1764: `921`,
    1765: `921`,
    1766: `921`,
    1767: `921`,
    1768: `921`,
    1769: `921`,
    177: `30`,
    1770: `921`,
    1771: `921`,
    1772: `921`,
    1773: `921`,
    1774: `921`,
    1775: `921`,
    1776: `921`,
    1777: `921`,
    1778: `921`,
    1779: `921`,
    178: `30`,
    1780: `921`,
    1781: `921`,
    1782: `921`,
    1783: `921`,
    1784: `921`,
    1785: `921`,
    1786: `921`,
    1787: `921`,
    1788: `921`,
    1789: `921`,
    179: `30`,
    1790: `921`,
    1791: `921`,
    1792: `921`,
    1793: `921`,
    1794: `921`,
    1795: `921`,
    1796: `921`,
    1797: `921`,
    1798: `921`,
    1799: `921`,
    18: `2`,
    180: `30`,
    1800: `921`,
    1801: `921`,
    1802: `921`,
    1803: `921`,
    1804: `921`,
    1805: `921`,
    1806: `921`,
    1807: `921`,
    1808: `921`,
    1809: `921`,
    181: `30`,
    1810: `921`,
    1811: `921`,
    1812: `921`,
    1813: `921`,
    1814: `921`,
    1815: `921`,
    1816: `921`,
    1817: `921`,
    1818: `921`,
    1819: `921`,
    182: `30`,
    1820: `921`,
    1821: `921`,
    1822: `921`,
    1823: `921`,
    1824: `921`,
    1825: `921`,
    1826: `921`,
    1827: `921`,
    1828: `921`,
    1829: `921`,
    183: `30`,
    1830: `921`,
    1831: `921`,
    1832: `921`,
    1833: `921`,
    1834: `921`,
    1835: `921`,
    1836: `921`,
    1837: `921`,
    1838: `921`,
    1839: `921`,
    184: `30`,
    1840: `921`,
    1841: `921`,
    1842: `921`,
    1843: `921`,
    1844: `921`,
    1845: `921`,
    1846: `922`,
    1847: `922`,
    1848: `923`,
    1849: `923`,
    185: `30`,
    1850: `923`,
    1851: `925`,
    1852: `926`,
    1853: `927`,
    1854: `927`,
    1855: `927`,
    1856: `928`,
    1857: `928`,
    1858: `929`,
    1859: `930`,
    186: `30`,
    1860: `930`,
    1861: `931`,
    1862: `932`,
    1863: `933`,
    1864: `934`,
    1865: `934`,
    1866: `935`,
    1867: `935`,
    1868: `935`,
    1869: `937`,
    187: `30`,
    1870: `937`,
    1871: `938`,
    1872: `939`,
    1873: `940`,
    1874: `943`,
    1875: `943`,
    1876: `943`,
    1877: `944`,
    1878: `944`,
    1879: `945`,
    188: `30`,
    1880: `946`,
    1881: `946`,
    1882: `947`,
    1883: `948`,
    1884: `949`,
    1885: `949`,
    1886: `949`,
    1887: `949`,
    1888: `949`,
    1889: `949`,
    189: `30`,
    1890: `950`,
    1891: `950`,
    1892: `950`,
    1893: `952`,
    1894: `952`,
    1895: `953`,
    1896: `954`,
    1897: `955`,
    1898: `958`,
    1899: `958`,
    19: `2`,
    190: `30`,
    1900: `958`,
    1901: `959`,
    1902: `959`,
    1903: `960`,
    1904: `960`,
    1905: `960`,
    1906: `961`,
    1907: `961`,
    1908: `962`,
    1909: `962`,
    191: `30`,
    1910: `962`,
    1911: `964`,
    1912: `964`,
    1913: `964`,
    1914: `964`,
    1915: `964`,
    1916: `964`,
    1917: `964`,
    1918: `964`,
    1919: `964`,
    192: `30`,
    1920: `964`,
    1921: `964`,
    1922: `964`,
    1923: `964`,
    1924: `964`,
    1925: `964`,
    1926: `964`,
    1927: `964`,
    1928: `964`,
    1929: `964`,
    193: `30`,
    1930: `964`,
    1931: `964`,
    1932: `964`,
    1933: `964`,
    1934: `964`,
    1935: `964`,
    1936: `964`,
    1937: `964`,
    1938: `964`,
    1939: `964`,
    194: `30`,
    1940: `964`,
    1941: `964`,
    1942: `964`,
    1943: `964`,
    1944: `964`,
    1945: `964`,
    1946: `964`,
    1947: `964`,
    1948: `964`,
    1949: `964`,
    195: `30`,
    1950: `964`,
    1951: `964`,
    1952: `964`,
    1953: `964`,
    1954: `964`,
    1955: `964`,
    1956: `964`,
    1957: `964`,
    1958: `964`,
    1959: `964`,
    196: `30`,
    1960: `964`,
    1961: `964`,
    1962: `964`,
    1963: `964`,
    1964: `964`,
    1965: `964`,
    1966: `964`,
    1967: `964`,
    1968: `964`,
    1969: `964`,
    197: `30`,
    1970: `964`,
    1971: `964`,
    1972: `964`,
    1973: `964`,
    1974: `964`,
    1975: `964`,
    1976: `964`,
    1977: `964`,
    1978: `964`,
    1979: `964`,
    198: `30`,
    1980: `964`,
    1981: `964`,
    1982: `964`,
    1983: `964`,
    1984: `964`,
    1985: `964`,
    1986: `964`,
    1987: `964`,
    1988: `964`,
    1989: `964`,
    199: `30`,
    1990: `964`,
    1991: `964`,
    1992: `964`,
    1993: `964`,
    1994: `964`,
    1995: `964`,
    1996: `964`,
    1997: `964`,
    1998: `964`,
    1999: `964`,
    2: `2`,
    20: `2`,
    200: `30`,
    2000: `964`,
    2001: `964`,
    2002: `964`,
    2003: `964`,
    2004: `964`,
    2005: `964`,
    2006: `964`,
    2007: `964`,
    2008: `964`,
    2009: `964`,
    201: `30`,
    2010: `964`,
    2011: `964`,
    2012: `964`,
    2013: `964`,
    2014: `964`,
    2015: `964`,
    2016: `964`,
    2017: `964`,
    2018: `964`,
    2019: `964`,
    202: `30`,
    2020: `964`,
    2021: `964`,
    2022: `964`,
    2023: `964`,
    2024: `964`,
    2025: `964`,
    2026: `964`,
    2027: `964`,
    2028: `964`,
    2029: `964`,
    203: `30`,
    2030: `964`,
    2031: `964`,
    2032: `964`,
    2033: `964`,
    2034: `964`,
    2035: `964`,
    2036: `964`,
    2037: `964`,
    2038: `964`,
    2039: `964`,
    204: `31`,
    2040: `964`,
    2041: `964`,
    2042: `964`,
    2043: `964`,
    2044: `964`,
    2045: `964`,
    2046: `964`,
    2047: `964`,
    2048: `964`,
    2049: `964`,
    205: `31`,
    2050: `964`,
    2051: `964`,
    2052: `964`,
    2053: `964`,
    2054: `964`,
    2055: `964`,
    2056: `964`,
    2057: `964`,
    2058: `964`,
    2059: `964`,
    206: `31`,
    2060: `964`,
    2061: `964`,
    2062: `964`,
    2063: `964`,
    2064: `964`,
    2065: `964`,
    2066: `964`,
    2067: `964`,
    2068: `964`,
    2069: `964`,
    207: `32`,
    2070: `964`,
    2071: `964`,
    2072: `964`,
    2073: `964`,
    2074: `964`,
    2075: `965`,
    2076: `965`,
    2077: `966`,
    2078: `966`,
    2079: `966`,
    208: `32`,
    2080: `968`,
    2081: `969`,
    2082: `970`,
    2083: `970`,
    2084: `970`,
    2085: `971`,
    2086: `971`,
    2087: `972`,
    2088: `972`,
    2089: `973`,
    209: `32`,
    2090: `974`,
    2091: `974`,
    2092: `975`,
    2093: `976`,
    2094: `976`,
    2095: `977`,
    2096: `978`,
    2097: `979`,
    2098: `979`,
    2099: `980`,
    21: `2`,
    210: `32`,
    2100: `981`,
    2101: `982`,
    2102: `982`,
    2103: `983`,
    2104: `984`,
    2105: `985`,
    2106: `986`,
    2107: `987`,
    2108: `987`,
    2109: `988`,
    211: `32`,
    2110: `988`,
    2111: `988`,
    2112: `990`,
    2113: `990`,
    2114: `991`,
    2115: `992`,
    2116: `993`,
    2117: `996`,
    2118: `996`,
    2119: `996`,
    212: `32`,
    2120: `997`,
    2121: `997`,
    2122: `998`,
    2123: `998`,
    2124: `998`,
    2125: `999`,
    2126: `999`,
    2127: `1000`,
    2128: `1000`,
    2129: `1000`,
    213: `32`,
    2130: `1001`,
    2131: `1002`,
    2132: `1002`,
    2133: `1003`,
    2134: `1003`,
    2135: `1003`,
    2136: `1004`,
    2137: `1005`,
    2138: `1005`,
    2139: `1006`,
    214: `32`,
    2140: `1006`,
    2141: `1006`,
    2142: `1008`,
    2143: `1008`,
    2144: `1009`,
    2145: `1010`,
    2146: `1011`,
    2147: `1014`,
    2148: `1014`,
    2149: `1014`,
    215: `32`,
    2150: `1015`,
    2151: `1015`,
    2152: `1015`,
    2153: `1015`,
    2154: `1015`,
    2155: `1015`,
    2156: `1015`,
    2157: `1015`,
    2158: `1015`,
    2159: `1015`,
    216: `32`,
    2160: `1015`,
    2161: `1015`,
    2162: `1015`,
    2163: `1015`,
    2164: `1015`,
    2165: `1015`,
    2166: `1015`,
    2167: `1015`,
    2168: `1015`,
    2169: `1015`,
    217: `32`,
    2170: `1015`,
    2171: `1015`,
    2172: `1015`,
    2173: `1015`,
    2174: `1015`,
    2175: `1015`,
    2176: `1015`,
    2177: `1015`,
    2178: `1015`,
    2179: `1015`,
    218: `32`,
    2180: `1015`,
    2181: `1015`,
    2182: `1015`,
    2183: `1015`,
    2184: `1016`,
    2185: `1016`,
    2186: `1017`,
    2187: `1018`,
    2188: `1019`,
    2189: `1020`,
    219: `32`,
    2190: `1020`,
    2191: `1020`,
    2192: `1021`,
    2193: `1021`,
    2194: `1022`,
    2195: `1022`,
    2196: `1022`,
    2197: `1024`,
    2198: `1024`,
    2199: `1024`,
    22: `2`,
    220: `32`,
    2200: `1024`,
    2201: `1024`,
    2202: `1024`,
    2203: `1024`,
    2204: `1024`,
    2205: `1024`,
    2206: `1024`,
    2207: `1024`,
    2208: `1024`,
    2209: `1024`,
    221: `32`,
    2210: `1024`,
    2211: `1024`,
    2212: `1024`,
    2213: `1024`,
    2214: `1024`,
    2215: `1024`,
    2216: `1024`,
    2217: `1024`,
    2218: `1024`,
    2219: `1024`,
    222: `32`,
    2220: `1024`,
    2221: `1024`,
    2222: `1024`,
    2223: `1024`,
    2224: `1024`,
    2225: `1024`,
    2226: `1024`,
    2227: `1024`,
    2228: `1024`,
    2229: `1024`,
    223: `32`,
    2230: `1024`,
    2231: `1024`,
    2232: `1024`,
    2233: `1024`,
    2234: `1024`,
    2235: `1024`,
    2236: `1024`,
    2237: `1024`,
    2238: `1024`,
    2239: `1024`,
    224: `32`,
    2240: `1024`,
    2241: `1024`,
    2242: `1024`,
    2243: `1024`,
    2244: `1024`,
    2245: `1024`,
    2246: `1024`,
    2247: `1024`,
    2248: `1024`,
    2249: `1024`,
    225: `32`,
    2250: `1024`,
    2251: `1024`,
    2252: `1024`,
    2253: `1024`,
    2254: `1024`,
    2255: `1024`,
    2256: `1024`,
    2257: `1024`,
    2258: `1024`,
    2259: `1024`,
    226: `32`,
    2260: `1024`,
    2261: `1024`,
    2262: `1024`,
    2263: `1024`,
    2264: `1024`,
    2265: `1024`,
    2266: `1024`,
    2267: `1024`,
    2268: `1024`,
    2269: `1024`,
    227: `32`,
    2270: `1024`,
    2271: `1024`,
    2272: `1024`,
    2273: `1024`,
    2274: `1024`,
    2275: `1024`,
    2276: `1024`,
    2277: `1024`,
    2278: `1024`,
    2279: `1024`,
    228: `32`,
    2280: `1024`,
    2281: `1024`,
    2282: `1024`,
    2283: `1024`,
    2284: `1024`,
    2285: `1024`,
    2286: `1024`,
    2287: `1024`,
    2288: `1024`,
    2289: `1024`,
    229: `32`,
    2290: `1024`,
    2291: `1024`,
    2292: `1024`,
    2293: `1024`,
    2294: `1024`,
    2295: `1024`,
    2296: `1024`,
    2297: `1024`,
    2298: `1024`,
    2299: `1024`,
    23: `2`,
    230: `32`,
    2300: `1024`,
    2301: `1024`,
    2302: `1024`,
    2303: `1024`,
    2304: `1024`,
    2305: `1024`,
    2306: `1024`,
    2307: `1024`,
    2308: `1024`,
    2309: `1024`,
    231: `32`,
    2310: `1024`,
    2311: `1024`,
    2312: `1024`,
    2313: `1024`,
    2314: `1024`,
    2315: `1024`,
    2316: `1024`,
    2317: `1024`,
    2318: `1024`,
    2319: `1024`,
    232: `32`,
    2320: `1024`,
    2321: `1024`,
    2322: `1024`,
    2323: `1024`,
    2324: `1024`,
    2325: `1024`,
    2326: `1024`,
    2327: `1024`,
    2328: `1024`,
    2329: `1024`,
    233: `32`,
    2330: `1024`,
    2331: `1024`,
    2332: `1024`,
    2333: `1024`,
    2334: `1024`,
    2335: `1024`,
    2336: `1024`,
    2337: `1024`,
    2338: `1024`,
    2339: `1024`,
    234: `32`,
    2340: `1024`,
    2341: `1024`,
    2342: `1024`,
    2343: `1024`,
    2344: `1024`,
    2345: `1024`,
    2346: `1024`,
    2347: `1024`,
    2348: `1024`,
    2349: `1024`,
    235: `32`,
    2350: `1024`,
    2351: `1024`,
    2352: `1024`,
    2353: `1024`,
    2354: `1024`,
    2355: `1024`,
    2356: `1024`,
    2357: `1024`,
    2358: `1024`,
    2359: `1024`,
    236: `32`,
    2360: `1024`,
    2361: `1025`,
    2362: `1025`,
    2363: `1026`,
    2364: `1026`,
    2365: `1026`,
    2366: `1028`,
    2367: `1028`,
    2368: `1029`,
    2369: `1030`,
    237: `32`,
    2370: `1031`,
    2371: `1034`,
    2372: `1034`,
    2373: `1034`,
    2374: `1035`,
    2375: `1035`,
    2376: `1036`,
    2377: `1036`,
    2378: `1037`,
    2379: `1037`,
    238: `32`,
    2380: `1037`,
    2381: `1039`,
    2382: `1039`,
    2383: `1040`,
    2384: `1041`,
    2385: `1042`,
    2386: `1042`,
    2387: `1043`,
    2388: `1043`,
    2389: `1044`,
    239: `32`,
    2390: `1044`,
    2391: `1044`,
    2392: `1045`,
    2393: `1045`,
    2394: `1046`,
    2395: `1046`,
    2396: `1047`,
    2397: `1047`,
    2398: `1047`,
    2399: `1048`,
    24: `2`,
    240: `32`,
    2400: `1048`,
    2401: `1049`,
    2402: `1049`,
    2403: `1050`,
    2404: `1050`,
    2405: `1050`,
    2406: `1051`,
    2407: `1051`,
    2408: `1052`,
    2409: `1052`,
    241: `32`,
    2410: `1052`,
    2411: `1052`,
    2412: `1052`,
    2413: `1052`,
    2414: `1053`,
    2415: `1053`,
    2416: `1054`,
    2417: `1055`,
    2418: `1056`,
    2419: `1056`,
    242: `32`,
    2420: `1057`,
    2421: `1058`,
    2422: `1058`,
    2423: `1059`,
    2424: `1060`,
    2425: `1060`,
    2426: `1061`,
    2427: `1062`,
    2428: `1064`,
    2429: `1064`,
    243: `32`,
    2430: `1065`,
    2431: `1065`,
    2432: `1065`,
    2433: `1066`,
    2434: `1066`,
    2435: `1067`,
    2436: `1067`,
    2437: `1067`,
    2438: `1068`,
    2439: `1069`,
    244: `32`,
    2440: `1069`,
    2441: `1070`,
    2442: `1070`,
    2443: `1071`,
    2444: `1072`,
    2445: `1076`,
    2446: `1076`,
    2447: `1077`,
    2448: `1078`,
    2449: `1079`,
    245: `32`,
    2450: `1080`,
    2451: `1080`,
    2452: `1081`,
    2453: `1081`,
    2454: `1081`,
    2455: `1082`,
    2456: `1083`,
    2457: `1088`,
    2458: `1088`,
    2459: `1089`,
    246: `32`,
    2460: `1090`,
    2461: `1090`,
    2462: `1091`,
    2463: `1092`,
    2464: `1092`,
    2465: `1093`,
    2466: `1093`,
    2467: `1093`,
    2468: `1095`,
    2469: `1095`,
    247: `32`,
    2470: `1096`,
    2471: `1097`,
    2472: `1097`,
    2473: `1098`,
    2474: `1099`,
    2475: `1099`,
    2476: `1100`,
    2477: `1100`,
    2478: `1100`,
    2479: `1101`,
    248: `32`,
    2480: `1101`,
    2481: `1102`,
    2482: `1102`,
    2483: `1103`,
    2484: `1104`,
    2485: `1104`,
    2486: `1105`,
    2487: `1106`,
    2488: `1106`,
    2489: `1107`,
    249: `32`,
    2490: `1108`,
    2491: `1110`,
    2492: `1110`,
    2493: `1110`,
    2494: `1111`,
    2495: `1112`,
    2496: `1113`,
    2497: `1113`,
    2498: `1114`,
    2499: `1114`,
    25: `2`,
    250: `32`,
    2500: `1115`,
    2501: `1116`,
    2502: `1117`,
    2503: `1118`,
    2504: `1118`,
    2505: `1119`,
    2506: `1120`,
    2507: `1120`,
    2508: `1121`,
    2509: `1121`,
    251: `32`,
    2510: `1122`,
    2511: `1122`,
    2512: `1123`,
    2513: `1123`,
    2514: `1123`,
    2515: `1125`,
    2516: `1125`,
    2517: `1125`,
    2518: `1126`,
    2519: `1126`,
    252: `32`,
    2520: `1126`,
    2521: `1126`,
    2522: `1127`,
    2523: `1127`,
    2524: `1127`,
    2525: `1128`,
    2526: `1128`,
    2527: `1128`,
    2528: `1129`,
    2529: `1129`,
    253: `32`,
    2530: `1130`,
    2531: `1130`,
    2532: `1130`,
    2533: `1132`,
    2534: `1132`,
    2535: `1132`,
    2536: `1133`,
    2537: `1133`,
    2538: `1133`,
    2539: `1134`,
    254: `32`,
    2540: `1134`,
    2541: `1135`,
    2542: `1135`,
    2543: `1135`,
    2544: `1137`,
    2545: `1138`,
    2546: `1138`,
    2547: `1139`,
    2548: `1140`,
    2549: `1141`,
    255: `32`,
    2550: `1141`,
    2551: `1142`,
    2552: `1142`,
    2553: `1143`,
    2554: `1144`,
    2555: `1145`,
    2556: `1146`,
    2557: `1146`,
    2558: `1147`,
    2559: `1148`,
    256: `32`,
    2560: `1149`,
    2561: `1150`,
    2562: `1150`,
    2563: `1151`,
    2564: `1152`,
    2565: `1153`,
    2566: `1153`,
    2567: `1153`,
    2568: `1154`,
    2569: `1154`,
    257: `34`,
    2570: `1154`,
    2571: `1155`,
    2572: `1156`,
    2573: `1157`,
    2574: `1158`,
    2575: `1158`,
    2576: `1158`,
    2577: `1160`,
    2578: `1160`,
    2579: `1160`,
    258: `36`,
    2580: `1161`,
    2581: `1161`,
    2582: `1161`,
    2583: `1162`,
    2584: `1162`,
    2585: `1163`,
    2586: `1163`,
    2587: `1164`,
    2588: `1164`,
    2589: `1164`,
    259: `36`,
    2590: `1166`,
    2591: `1166`,
    2592: `1166`,
    2593: `1167`,
    2594: `1167`,
    2595: `1167`,
    2596: `1168`,
    2597: `1168`,
    2598: `1169`,
    2599: `1169`,
    26: `2`,
    260: `37`,
    2600: `1170`,
    2601: `1170`,
    2602: `1170`,
    2603: `1172`,
    2604: `1172`,
    2605: `1172`,
    2606: `1173`,
    2607: `1173`,
    2608: `1174`,
    2609: `1174`,
    261: `37`,
    2610: `1174`,
    2611: `1176`,
    2612: `1176`,
    2613: `1176`,
    2614: `1178`,
    2615: `1178`,
    2616: `1178`,
    2617: `1180`,
    2618: `1180`,
    2619: `1180`,
    262: `37`,
    2620: `1182`,
    2621: `1182`,
    2622: `1182`,
    2623: `1184`,
    2624: `1184`,
    2625: `1184`,
    2626: `1185`,
    2627: `1185`,
    2628: `1185`,
    2629: `1186`,
    263: `38`,
    2630: `1186`,
    2631: `1186`,
    2632: `1187`,
    2633: `1187`,
    2634: `1188`,
    2635: `1188`,
    2636: `1189`,
    2637: `1189`,
    2638: `1190`,
    2639: `1190`,
    264: `38`,
    2640: `1190`,
    2641: `1192`,
    2642: `1192`,
    2643: `1192`,
    2644: `1193`,
    2645: `1193`,
    2646: `1193`,
    2647: `1194`,
    2648: `1194`,
    2649: `1195`,
    265: `39`,
    2650: `1195`,
    2651: `1196`,
    2652: `1196`,
    2653: `1196`,
    2654: `1198`,
    2655: `1198`,
    2656: `1198`,
    2657: `1200`,
    2658: `1200`,
    2659: `1200`,
    266: `39`,
    2660: `1201`,
    2661: `1201`,
    2662: `1201`,
    2663: `1202`,
    2664: `1202`,
    2665: `1203`,
    2666: `1203`,
    2667: `1204`,
    2668: `1204`,
    2669: `1204`,
    267: `40`,
    2670: `1206`,
    2671: `1206`,
    2672: `1206`,
    2673: `1207`,
    2674: `1207`,
    2675: `1208`,
    2676: `1208`,
    2677: `1208`,
    2678: `1210`,
    2679: `1210`,
    268: `40`,
    2680: `1210`,
    2681: `1212`,
    2682: `1212`,
    2683: `1212`,
    2684: `1213`,
    2685: `1213`,
    2686: `1214`,
    2687: `1214`,
    2688: `1214`,
    2689: `1216`,
    269: `40`,
    2690: `1216`,
    2691: `1216`,
    2692: `1217`,
    2693: `1217`,
    2694: `1218`,
    2695: `1218`,
    2696: `1218`,
    2697: `1220`,
    2698: `1220`,
    2699: `1221`,
    27: `2`,
    270: `41`,
    2700: `1221`,
    2701: `1221`,
    2702: `1222`,
    2703: `1222`,
    2704: `1223`,
    2705: `1223`,
    2706: `1223`,
    2707: `1225`,
    2708: `1225`,
    2709: `1226`,
    271: `41`,
    2710: `1226`,
    2711: `1226`,
    2712: `1227`,
    2713: `1227`,
    2714: `1228`,
    2715: `1228`,
    2716: `1228`,
    2717: `1230`,
    2718: `1230`,
    2719: `1231`,
    272: `42`,
    2720: `1231`,
    2721: `1231`,
    2722: `1232`,
    2723: `1232`,
    2724: `1233`,
    2725: `1233`,
    2726: `1233`,
    2727: `1235`,
    2728: `1235`,
    2729: `1236`,
    273: `42`,
    2730: `1236`,
    2731: `1236`,
    2732: `1237`,
    2733: `1237`,
    2734: `1238`,
    2735: `1238`,
    2736: `1238`,
    2737: `1240`,
    2738: `1240`,
    2739: `1240`,
    274: `43`,
    2740: `1242`,
    2741: `1242`,
    2742: `1242`,
    2743: `1244`,
    2744: `1244`,
    2745: `1244`,
    2746: `1246`,
    2747: `1246`,
    2748: `1246`,
    2749: `1248`,
    275: `43`,
    2750: `1248`,
    2751: `1249`,
    2752: `1249`,
    2753: `1249`,
    2754: `1250`,
    2755: `1250`,
    2756: `1251`,
    2757: `1251`,
    2758: `1251`,
    2759: `1253`,
    276: `44`,
    2760: `1253`,
    2761: `1253`,
    2762: `1255`,
    2763: `1256`,
    2764: `1256`,
    2765: `1257`,
    2766: `1257`,
    2767: `1257`,
    2768: `1257`,
    2769: `1257`,
    277: `45`,
    2770: `1257`,
    2771: `1257`,
    2772: `1257`,
    2773: `1257`,
    2774: `1257`,
    2775: `1258`,
    2776: `1258`,
    2777: `1259`,
    2778: `1260`,
    2779: `1260`,
    278: `50`,
    2780: `1260`,
    2781: `1261`,
    2782: `1262`,
    2783: `1263`,
    2784: `1263`,
    2785: `1264`,
    2786: `1265`,
    2787: `1265`,
    2788: `1265`,
    2789: `1266`,
    279: `50`,
    2790: `1266`,
    2791: `1267`,
    2792: `1267`,
    2793: `1268`,
    2794: `1268`,
    2795: `1269`,
    2796: `1269`,
    2797: `1270`,
    2798: `1270`,
    2799: `1271`,
    28: `2`,
    280: `51`,
    2800: `1271`,
    2801: `1271`,
    2802: `1273`,
    2803: `1273`,
    2804: `1274`,
    2805: `1274`,
    2806: `1274`,
    2807: `1275`,
    2808: `1275`,
    2809: `1276`,
    281: `51`,
    2810: `1277`,
    2811: `1277`,
    2812: `1278`,
    2813: `1278`,
    2814: `1278`,
    2815: `1278`,
    2816: `1278`,
    2817: `1278`,
    2818: `1278`,
    2819: `1278`,
    282: `52`,
    2820: `1278`,
    2821: `1278`,
    2822: `1279`,
    2823: `1279`,
    2824: `1280`,
    2825: `1281`,
    2826: `1281`,
    2827: `1281`,
    2828: `1282`,
    2829: `1283`,
    283: `53`,
    2830: `1284`,
    2831: `1284`,
    2832: `1285`,
    2833: `1286`,
    2834: `1286`,
    2835: `1286`,
    2836: `1287`,
    2837: `1287`,
    2838: `1288`,
    2839: `1288`,
    284: `59`,
    2840: `1288`,
    2841: `1288`,
    2842: `1288`,
    2843: `1288`,
    2844: `1289`,
    2845: `1289`,
    2846: `1290`,
    2847: `1291`,
    2848: `1293`,
    2849: `1293`,
    285: `59`,
    2850: `1294`,
    2851: `1294`,
    2852: `1295`,
    2853: `1295`,
    2854: `1295`,
    2855: `1296`,
    2856: `1296`,
    2857: `1297`,
    2858: `1297`,
    2859: `1298`,
    286: `60`,
    2860: `1299`,
    2861: `1300`,
    2862: `1301`,
    2863: `1301`,
    2864: `1302`,
    2865: `1302`,
    2866: `1303`,
    2867: `1303`,
    2868: `1304`,
    2869: `1305`,
    287: `61`,
    2870: `1305`,
    2871: `1306`,
    2872: `1306`,
    2873: `1307`,
    2874: `1307`,
    2875: `1308`,
    2876: `1308`,
    2877: `1308`,
    2878: `1310`,
    2879: `1311`,
    288: `61`,
    2880: `1312`,
    2881: `1313`,
    2882: `1314`,
    2883: `1316`,
    2884: `1317`,
    2885: `1317`,
    2886: `1318`,
    2887: `1319`,
    2888: `1319`,
    2889: `1320`,
    289: `62`,
    2890: `1320`,
    2891: `1321`,
    2892: `1321`,
    2893: `1322`,
    2894: `1323`,
    2895: `1325`,
    2896: `1325`,
    2897: `1326`,
    2898: `1327`,
    2899: `1327`,
    29: `2`,
    290: `62`,
    2900: `1327`,
    2901: `1328`,
    2902: `1328`,
    2903: `1329`,
    2904: `1329`,
    2905: `1329`,
    2906: `1332`,
    2907: `1333`,
    2908: `1333`,
    2909: `1334`,
    291: `63`,
    2910: `1335`,
    2911: `1335`,
    2912: `1336`,
    2913: `1336`,
    2914: `1336`,
    2915: `1337`,
    2916: `1338`,
    2917: `1339`,
    2918: `1339`,
    2919: `1339`,
    292: `64`,
    2920: `1340`,
    2921: `1341`,
    2922: `1342`,
    2923: `1343`,
    2924: `1344`,
    2925: `1344`,
    2926: `1345`,
    2927: `1345`,
    2928: `1345`,
    2929: `1348`,
    293: `65`,
    2930: `1349`,
    2931: `1349`,
    2932: `1350`,
    2933: `1351`,
    2934: `1351`,
    2935: `1352`,
    2936: `1352`,
    2937: `1352`,
    2938: `1353`,
    2939: `1354`,
    294: `66`,
    2940: `1354`,
    2941: `1354`,
    2942: `1355`,
    2943: `1356`,
    2944: `1357`,
    2945: `1358`,
    2946: `1359`,
    2947: `1359`,
    2948: `1360`,
    2949: `1360`,
    295: `66`,
    2950: `1360`,
    2951: `1362`,
    2952: `1362`,
    2953: `1362`,
    2954: `1364`,
    2955: `1364`,
    2956: `1364`,
    2957: `1366`,
    2958: `1366`,
    2959: `1366`,
    296: `67`,
    2960: `1367`,
    2961: `1367`,
    2962: `1367`,
    2963: `1368`,
    2964: `1368`,
    2965: `1368`,
    2966: `1369`,
    2967: `1369`,
    2968: `1369`,
    2969: `1370`,
    297: `67`,
    2970: `1371`,
    2971: `1371`,
    2972: `1371`,
    2973: `1372`,
    2974: `1373`,
    2975: `1373`,
    2976: `1373`,
    2977: `1374`,
    2978: `1375`,
    2979: `1375`,
    298: `67`,
    2980: `1376`,
    2981: `1376`,
    2982: `1377`,
    2983: `1377`,
    2984: `1378`,
    2985: `1378`,
    2986: `1379`,
    2987: `1379`,
    2988: `1380`,
    2989: `1380`,
    299: `68`,
    2990: `1381`,
    2991: `1381`,
    2992: `1381`,
    2993: `1383`,
    2994: `1383`,
    2995: `1383`,
    2996: `1385`,
    2997: `1385`,
    2998: `1385`,
    2999: `1386`,
    3: `2`,
    30: `2`,
    300: `68`,
    3000: `1386`,
    3001: `1387`,
    3002: `1387`,
    3003: `1387`,
    3004: `1389`,
    3005: `1389`,
    3006: `1389`,
    3007: `1391`,
    3008: `1392`,
    3009: `1394`,
    301: `69`,
    3010: `1395`,
    3011: `1396`,
    3012: `1397`,
    3013: `1397`,
    3014: `1398`,
    3015: `1398`,
    3016: `1399`,
    3017: `1399`,
    3018: `1399`,
    3019: `1400`,
    302: `69`,
    3020: `1402`,
    3021: `1403`,
    3022: `1404`,
    3023: `1404`,
    3024: `1404`,
    3025: `1405`,
    3026: `1406`,
    3027: `1406`,
    3028: `1407`,
    3029: `1407`,
    303: `70`,
    3030: `1407`,
    3031: `1408`,
    3032: `1410`,
    3033: `1410`,
    3034: `1411`,
    3035: `1411`,
    3036: `1412`,
    3037: `1413`,
    3038: `1415`,
    3039: `1415`,
    304: `71`,
    3040: `1415`,
    3041: `1417`,
    3042: `1418`,
    3043: `1418`,
    3044: `1419`,
    3045: `1419`,
    3046: `1420`,
    3047: `1420`,
    3048: `1420`,
    3049: `1421`,
    305: `71`,
    3050: `1421`,
    3051: `1421`,
    3052: `1423`,
    3053: `1423`,
    3054: `1423`,
    3055: `1425`,
    3056: `1426`,
    3057: `1426`,
    3058: `1426`,
    3059: `1427`,
    306: `72`,
    3060: `1427`,
    3061: `1428`,
    3062: `1429`,
    3063: `1429`,
    3064: `1429`,
    3065: `1430`,
    3066: `1430`,
    3067: `1431`,
    3068: `1432`,
    3069: `1432`,
    307: `73`,
    3070: `1432`,
    3071: `1433`,
    3072: `1433`,
    3073: `1434`,
    3074: `1435`,
    3075: `1435`,
    3076: `1435`,
    3077: `1436`,
    3078: `1436`,
    3079: `1437`,
    308: `73`,
    3080: `1438`,
    3081: `1438`,
    3082: `1438`,
    3083: `1439`,
    3084: `1440`,
    3085: `1440`,
    3086: `1441`,
    3087: `1442`,
    3088: `1442`,
    3089: `1442`,
    309: `74`,
    3090: `1443`,
    3091: `1443`,
    3092: `1444`,
    3093: `1445`,
    3094: `1445`,
    3095: `1445`,
    3096: `1446`,
    3097: `1446`,
    3098: `1446`,
    3099: `1447`,
    31: `2`,
    310: `75`,
    3100: `1448`,
    3101: `1448`,
    3102: `1449`,
    3103: `1449`,
    3104: `1449`,
    3105: `1450`,
    3106: `1451`,
    3107: `1451`,
    3108: `1452`,
    3109: `1454`,
    311: `77`,
    3110: `1455`,
    3111: `1456`,
    3112: `1457`,
    3113: `1457`,
    3114: `1457`,
    3115: `1458`,
    3116: `1458`,
    3117: `1459`,
    3118: `1460`,
    3119: `1461`,
    312: `78`,
    3120: `1463`,
    3121: `1464`,
    3122: `1465`,
    3123: `1466`,
    3124: `1466`,
    3125: `1466`,
    3126: `1467`,
    3127: `1467`,
    3128: `1468`,
    3129: `1468`,
    313: `78`,
    3130: `1468`,
    3131: `1469`,
    3132: `1469`,
    3133: `1469`,
    3134: `1471`,
    3135: `1472`,
    3136: `1472`,
    3137: `1472`,
    3138: `1473`,
    3139: `1474`,
    314: `79`,
    3140: `1475`,
    3141: `1476`,
    3142: `1477`,
    3143: `1479`,
    3144: `1480`,
    3145: `1481`,
    3146: `1481`,
    3147: `1482`,
    3148: `1483`,
    3149: `1484`,
    315: `79`,
    3150: `1485`,
    3151: `1486`,
    3152: `1487`,
    3153: `1489`,
    3154: `1490`,
    3155: `1490`,
    3156: `1490`,
    3157: `1493`,
    3158: `1493`,
    3159: `1494`,
    316: `79`,
    3160: `1494`,
    3161: `1495`,
    3162: `1496`,
    3163: `1497`,
    3164: `1498`,
    3165: `1498`,
    3166: `1499`,
    3167: `1500`,
    3168: `1500`,
    3169: `1501`,
    317: `79`,
    3170: `1501`,
    3171: `1502`,
    3172: `1502`,
    3173: `1503`,
    3174: `1504`,
    3175: `1505`,
    3176: `1505`,
    3177: `1506`,
    3178: `1507`,
    3179: `1508`,
    318: `79`,
    3180: `1509`,
    3181: `1509`,
    3182: `1510`,
    3183: `1511`,
    3184: `1512`,
    3185: `1514`,
    3186: `1515`,
    3187: `1515`,
    3188: `1516`,
    3189: `1518`,
    319: `79`,
    3190: `1519`,
    3191: `1520`,
    3192: `1521`,
    3193: `1522`,
    3194: `1522`,
    3195: `1523`,
    3196: `1524`,
    3197: `1525`,
    3198: `1526`,
    3199: `1528`,
    32: `2`,
    320: `79`,
    3200: `1528`,
    3201: `1529`,
    3202: `1529`,
    3203: `1530`,
    3204: `1531`,
    3205: `1532`,
    3206: `1532`,
    3207: `1532`,
    3208: `1533`,
    3209: `1533`,
    321: `79`,
    3210: `1533`,
    3211: `1535`,
    3212: `1535`,
    3213: `1536`,
    3214: `1537`,
    3215: `1537`,
    3216: `1538`,
    3217: `1540`,
    3218: `1541`,
    3219: `1541`,
    322: `79`,
    3220: `1542`,
    323: `79`,
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
    469: `172`,
    47: `2`,
    470: `173`,
    471: `173`,
    472: `174`,
    473: `175`,
    474: `175`,
    475: `176`,
    476: `177`,
    477: `177`,
    478: `177`,
    479: `178`,
    48: `2`,
    480: `178`,
    481: `178`,
    482: `179`,
    483: `180`,
    484: `180`,
    485: `181`,
    486: `181`,
    487: `182`,
    488: `183`,
    489: `189`,
    49: `4`,
    490: `190`,
    491: `190`,
    492: `191`,
    493: `191`,
    494: `191`,
    495: `191`,
    496: `191`,
    497: `191`,
    498: `191`,
    499: `191`,
    5: `2`,
    50: `4`,
    500: `191`,
    501: `191`,
    502: `192`,
    503: `192`,
    504: `193`,
    505: `194`,
    506: `194`,
    507: `194`,
    508: `195`,
    509: `196`,
    51: `5`,
    510: `197`,
    511: `197`,
    512: `198`,
    513: `199`,
    514: `199`,
    515: `199`,
    516: `200`,
    517: `200`,
    518: `201`,
    519: `201`,
    52: `5`,
    520: `202`,
    521: `203`,
    522: `203`,
    523: `204`,
    524: `205`,
    525: `205`,
    526: `206`,
    527: `206`,
    528: `207`,
    529: `208`,
    53: `5`,
    530: `208`,
    531: `208`,
    532: `209`,
    533: `209`,
    534: `209`,
    535: `211`,
    536: `211`,
    537: `212`,
    538: `213`,
    539: `213`,
    54: `6`,
    540: `214`,
    541: `215`,
    542: `215`,
    543: `216`,
    544: `217`,
    545: `217`,
    546: `218`,
    547: `219`,
    548: `219`,
    549: `220`,
    55: `7`,
    550: `221`,
    551: `221`,
    552: `221`,
    553: `222`,
    554: `222`,
    555: `222`,
    556: `223`,
    557: `223`,
    558: `224`,
    559: `225`,
    56: `8`,
    560: `225`,
    561: `225`,
    562: `226`,
    563: `226`,
    564: `226`,
    565: `227`,
    566: `227`,
    567: `228`,
    568: `228`,
    569: `229`,
    57: `9`,
    570: `230`,
    571: `230`,
    572: `231`,
    573: `232`,
    574: `232`,
    575: `233`,
    576: `234`,
    577: `236`,
    578: `236`,
    579: `237`,
    58: `10`,
    580: `237`,
    581: `238`,
    582: `238`,
    583: `238`,
    584: `240`,
    585: `240`,
    586: `241`,
    587: `241`,
    588: `241`,
    589: `242`,
    59: `11`,
    590: `242`,
    591: `243`,
    592: `243`,
    593: `244`,
    594: `244`,
    595: `244`,
    596: `245`,
    597: `245`,
    598: `246`,
    599: `246`,
    6: `2`,
    60: `11`,
    600: `247`,
    601: `247`,
    602: `247`,
    603: `248`,
    604: `248`,
    605: `249`,
    606: `249`,
    607: `251`,
    608: `252`,
    609: `252`,
    61: `12`,
    610: `253`,
    611: `254`,
    612: `254`,
    613: `255`,
    614: `256`,
    615: `256`,
    616: `256`,
    617: `257`,
    618: `257`,
    619: `257`,
    62: `13`,
    620: `258`,
    621: `259`,
    622: `259`,
    623: `260`,
    624: `260`,
    625: `261`,
    626: `262`,
    627: `268`,
    628: `268`,
    629: `269`,
    63: `14`,
    630: `269`,
    631: `270`,
    632: `271`,
    633: `271`,
    634: `272`,
    635: `272`,
    636: `274`,
    637: `275`,
    638: `275`,
    639: `276`,
    64: `14`,
    640: `277`,
    641: `277`,
    642: `278`,
    643: `279`,
    644: `280`,
    645: `280`,
    646: `280`,
    647: `281`,
    648: `281`,
    649: `281`,
    65: `15`,
    650: `282`,
    651: `283`,
    652: `283`,
    653: `284`,
    654: `284`,
    655: `285`,
    656: `286`,
    657: `292`,
    658: `292`,
    659: `293`,
    66: `16`,
    660: `294`,
    661: `294`,
    662: `295`,
    663: `296`,
    664: `296`,
    665: `297`,
    666: `297`,
    667: `298`,
    668: `299`,
    669: `299`,
    67: `17`,
    670: `299`,
    671: `300`,
    672: `300`,
    673: `300`,
    674: `302`,
    675: `302`,
    676: `303`,
    677: `304`,
    678: `304`,
    679: `305`,
    68: `18`,
    680: `306`,
    681: `306`,
    682: `307`,
    683: `308`,
    684: `308`,
    685: `309`,
    686: `310`,
    687: `310`,
    688: `311`,
    689: `312`,
    69: `19`,
    690: `312`,
    691: `312`,
    692: `313`,
    693: `313`,
    694: `313`,
    695: `314`,
    696: `314`,
    697: `315`,
    698: `316`,
    699: `316`,
    7: `2`,
    70: `20`,
    700: `316`,
    701: `317`,
    702: `317`,
    703: `317`,
    704: `318`,
    705: `318`,
    706: `319`,
    707: `319`,
    708: `320`,
    709: `321`,
    71: `20`,
    710: `321`,
    711: `322`,
    712: `323`,
    713: `323`,
    714: `324`,
    715: `325`,
    716: `327`,
    717: `327`,
    718: `328`,
    719: `328`,
    72: `21`,
    720: `329`,
    721: `330`,
    722: `330`,
    723: `330`,
    724: `331`,
    725: `331`,
    726: `332`,
    727: `332`,
    728: `333`,
    729: `334`,
    73: `22`,
    730: `334`,
    731: `335`,
    732: `336`,
    733: `337`,
    734: `337`,
    735: `338`,
    736: `338`,
    737: `338`,
    738: `339`,
    739: `339`,
    74: `23`,
    740: `340`,
    741: `340`,
    742: `341`,
    743: `342`,
    744: `342`,
    745: `343`,
    746: `344`,
    747: `344`,
    748: `345`,
    749: `346`,
    75: `23`,
    750: `348`,
    751: `349`,
    752: `349`,
    753: `350`,
    754: `350`,
    755: `350`,
    756: `350`,
    757: `350`,
    758: `350`,
    759: `350`,
    76: `24`,
    760: `350`,
    761: `350`,
    762: `350`,
    763: `351`,
    764: `351`,
    765: `352`,
    766: `353`,
    767: `353`,
    768: `353`,
    769: `354`,
    77: `25`,
    770: `355`,
    771: `356`,
    772: `356`,
    773: `357`,
    774: `358`,
    775: `358`,
    776: `358`,
    777: `359`,
    778: `359`,
    779: `360`,
    78: `26`,
    780: `360`,
    781: `361`,
    782: `361`,
    783: `362`,
    784: `362`,
    785: `362`,
    786: `364`,
    787: `364`,
    788: `365`,
    789: `365`,
    79: `26`,
    790: `365`,
    791: `366`,
    792: `366`,
    793: `367`,
    794: `367`,
    795: `367`,
    796: `368`,
    797: `369`,
    798: `369`,
    799: `371`,
    8: `2`,
    80: `27`,
    800: `372`,
    801: `372`,
    802: `373`,
    803: `374`,
    804: `374`,
    805: `375`,
    806: `376`,
    807: `377`,
    808: `377`,
    809: `377`,
    81: `28`,
    810: `378`,
    811: `379`,
    812: `380`,
    813: `381`,
    814: `382`,
    815: `387`,
    816: `387`,
    817: `388`,
    818: `389`,
    819: `389`,
    82: `30`,
    820: `390`,
    821: `391`,
    822: `392`,
    823: `392`,
    824: `393`,
    825: `393`,
    826: `393`,
    827: `394`,
    828: `395`,
    829: `395`,
    83: `30`,
    830: `396`,
    831: `396`,
    832: `396`,
    833: `396`,
    834: `396`,
    835: `396`,
    836: `396`,
    837: `396`,
    838: `396`,
    839: `396`,
    84: `30`,
    840: `397`,
    841: `397`,
    842: `398`,
    843: `399`,
    844: `399`,
    845: `399`,
    846: `400`,
    847: `401`,
    848: `402`,
    849: `402`,
    85: `30`,
    850: `403`,
    851: `404`,
    852: `404`,
    853: `404`,
    854: `405`,
    855: `405`,
    856: `406`,
    857: `406`,
    858: `407`,
    859: `407`,
    86: `30`,
    860: `408`,
    861: `408`,
    862: `408`,
    863: `410`,
    864: `410`,
    865: `411`,
    866: `411`,
    867: `411`,
    868: `412`,
    869: `412`,
    87: `30`,
    870: `414`,
    871: `415`,
    872: `415`,
    873: `416`,
    874: `417`,
    875: `417`,
    876: `418`,
    877: `419`,
    878: `419`,
    879: `419`,
    88: `30`,
    880: `420`,
    881: `421`,
    882: `422`,
    883: `423`,
    884: `424`,
    885: `429`,
    886: `429`,
    887: `430`,
    888: `431`,
    889: `431`,
    89: `30`,
    890: `432`,
    891: `433`,
    892: `433`,
    893: `434`,
    894: `434`,
    895: `434`,
    896: `435`,
    897: `436`,
    898: `436`,
    899: `437`,
    9: `2`,
    90: `30`,
    900: `437`,
    901: `437`,
    902: `437`,
    903: `437`,
    904: `437`,
    905: `437`,
    906: `437`,
    907: `437`,
    908: `437`,
    909: `438`,
    91: `30`,
    910: `438`,
    911: `439`,
    912: `440`,
    913: `440`,
    914: `440`,
    915: `441`,
    916: `442`,
    917: `443`,
    918: `443`,
    919: `444`,
    92: `30`,
    920: `445`,
    921: `445`,
    922: `445`,
    923: `446`,
    924: `446`,
    925: `447`,
    926: `447`,
    927: `448`,
    928: `448`,
    929: `449`,
    93: `30`,
    930: `449`,
    931: `449`,
    932: `451`,
    933: `451`,
    934: `452`,
    935: `452`,
    936: `452`,
    937: `453`,
    938: `453`,
    939: `454`,
    94: `30`,
    940: `454`,
    941: `455`,
    942: `455`,
    943: `456`,
    944: `457`,
    945: `464`,
    946: `464`,
    947: `465`,
    948: `465`,
    949: `465`,
    95: `30`,
    950: `466`,
    951: `467`,
    952: `474`,
    953: `474`,
    954: `475`,
    955: `475`,
    956: `475`,
    957: `476`,
    958: `477`,
    959: `477`,
    96: `30`,
    960: `478`,
    961: `479`,
    962: `480`,
    963: `487`,
    964: `487`,
    965: `488`,
    966: `488`,
    967: `489`,
    968: `490`,
    969: `490`,
    97: `30`,
    970: `491`,
    971: `491`,
    972: `492`,
    973: `492`,
    974: `492`,
    975: `495`,
    976: `495`,
    977: `496`,
    978: `497`,
    979: `498`,
    98: `30`,
    980: `498`,
    981: `498`,
    982: `498`,
    983: `498`,
    984: `498`,
    985: `499`,
    986: `499`,
    987: `499`,
    988: `501`,
    989: `501`,
    99: `30`,
    990: `502`,
    991: `502`,
    992: `502`,
    993: `503`,
    994: `504`,
    995: `504`,
    996: `505`,
    997: `505`,
    998: `506`,
    999: `507`
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
    at: './index.rsh:387:11:after expr stmt semicolon',
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

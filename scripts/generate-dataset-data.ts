export const initialConditions = {
  asset1: {
    // Book value t(n) = t(n - 1) * 0.95
    'Book Value': [1000000, 950000, 902500, 857375, 814506.25, 773780.9375, 735091.8906, 698337.2961, 663420.4313, 630249.4097, 598736.9392, 568800.0923, 540360.0877, 513342.0833, 487674.9791, 463291.2302, 440126.6687, 418120.3352, 397214.3185, 377353.6025, 358485.9224, 340561.6263, 323533.545, 307356.8677, 291989.0243, 277389.5731, 263520.0945, 250344.0897, 237826.8853, 225935.541, 214638.7639, 203906.8257, 193711.4845, 184025.9102, 174824.6147, 166083.384, 157779.2148, 149890.254, 142395.7413, 135275.9543, 128512.1566],
    // Market value t(n) = t(n - 1) * 0.95
    'Market Value': [990000, 940500, 893475, 848801.25, 806361.1875, 766043.1281, 727740.9717, 691353.9231, 656786.227, 623946.9156, 592749.5698, 563112.0914, 534956.4868, 508208.6624, 482798.2293, 458658.3179, 435725.402, 413939.1319, 393242.1753, 373580.0665, 354901.0632, 337156.01, 320298.2095, 304283.299, 289069.1341, 274615.6774, 260884.8935, 247840.6488, 235448.6164, 223676.1856, 212492.3763, 201867.7575, 191774.3696, 182185.6511, 173076.3686, 164422.5501, 156201.4226, 148391.3515, 140971.7839, 133923.1947, 127227.035],
    // Accrued Interest t(n) = t(n - 1) * 0.01
    'Accrued Interest': [9900, 9405, 8934.75, 8488.0125, 8063.611875, 7660.431281, 7277.409717, 6913.539231, 6567.86227, 6239.469156, 5927.495698, 5631.120914, 5349.564868, 5082.086624, 4827.982293, 4586.583179, 4357.25402, 4139.391319, 3932.421753, 3735.800665, 3549.010632, 3371.5601, 3202.982095, 3042.83299, 2890.691341, 2746.156774, 2608.848935, 2478.406488, 2354.486164, 2236.761856, 2124.923763, 2018.677575, 1917.743696, 1821.856511, 1730.763686, 1644.225501, 1562.014226, 1483.913515, 1409.717839, 1339.231947, 1272.27035],
    // Market value t(n) = t(n - 1)
    'Net yield': [0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03],
  },
  asset2: {
    // Book value t(n) = t(n - 1) * 0.99
    'Book Value': [2000000, 1980000, 1960200, 1940598, 1921192.02, 1901980.1, 1882960.299, 1864130.696, 1845489.389, 1827034.495, 1808764.15, 1790676.509, 1772769.743, 1755042.046, 1737491.626, 1720116.709, 1702915.542, 1685886.387, 1669027.523, 1652337.248, 1635813.875, 1619455.736, 1603261.179, 1587228.567, 1571356.282, 1555642.719, 1540086.292, 1524685.429, 1509438.574, 1494344.189, 1479400.747, 1464606.739, 1449960.672, 1435461.065, 1421106.455, 1406895.39, 1392826.436, 1378898.172, 1365109.19, 1351458.098, 1337943.517],
    // Market value t(n) = t(n - 1) * 0.99
    'Market Value': [1990000, 1970100, 1950399, 1930895.01, 1911586.06, 1892470.199, 1873545.497, 1854810.042, 1836261.942, 1817899.322, 1799720.329, 1781723.126, 1763905.895, 1746266.836, 1728804.167, 1711516.126, 1694400.964, 1677456.955, 1660682.385, 1644075.561, 1627634.806, 1611358.458, 1595244.873, 1579292.424, 1563499.5, 1547864.505, 1532385.86, 1517062.002, 1501891.382, 1486872.468, 1472003.743, 1457283.706, 1442710.869, 1428283.76, 1414000.922, 1399860.913, 1385862.304, 1372003.681, 1358283.644, 1344700.808, 1331253.8],
    // Accrued Interest t(n) = t(n - 1) * 0.01
    'Accrued Interest': [19900, 19701, 19503.99, 19308.9501, 19115.8606, 18924.70199, 18735.45497, 18548.10042, 18362.61942, 18178.99322, 17997.20329, 17817.23126, 17639.05895, 17462.66836, 17288.04167, 17115.16126, 16944.00964, 16774.56955, 16606.82385, 16440.75561, 16276.34806, 16113.58458, 15952.44873, 15792.92424, 15634.995, 15478.64505, 15323.8586, 15170.62002, 15018.91382, 14868.72468, 14720.03743, 14572.83706, 14427.10869, 14282.8376, 14140.00922, 13998.60913, 13858.62304, 13720.03681, 13582.83644, 13447.00808, 13312.538],
    // Market value t(n) = t(n - 1) * 0.99
    'Net yield': [0.03, 0.0297, 0.029403, 0.02910897, 0.0288178803, 0.0285297015, 0.02824440448, 0.02796196044, 0.02768234083, 0.02740551742, 0.02713146225, 0.02686014763, 0.02659154615, 0.02632563069, 0.02606237438, 0.02580175064, 0.02554373313, 0.0252882958, 0.02503541284, 0.02478505872, 0.02453720813, 0.02429183605, 0.02404891769, 0.02380842851, 0.02357034422, 0.02333464078, 0.02310129437, 0.02287028143, 0.02264157862, 0.02241516283, 0.0221910112, 0.02196910109, 0.02174941008, 0.02153191598, 0.02131659682, 0.02110343085, 0.02089239654, 0.02068347258, 0.02047663785, 0.02027187147, 0.02006915276],
  },
  asset3: {
    // Book value t(n) = t(n - 1) * 0.99
    'Book Value': [3000000, 2940000, 2881200, 2823576, 2767104.48, 2711762.39, 2657527.143, 2604376.6, 2552289.068, 2501243.286, 2451218.421, 2402194.052, 2354150.171, 2307067.168, 2260925.824, 2215707.308, 2171393.162, 2127965.299, 2085405.993, 2043697.873, 2002823.915, 1962767.437, 1923512.088, 1885041.846, 1847341.01, 1810394.189, 1774186.306, 1738702.579, 1703928.528, 1669849.957, 1636452.958, 1603723.899, 1571649.421, 1540216.433, 1509412.104, 1479223.862, 1449639.385, 1420646.597, 1392233.665, 1364388.992, 1337101.212],
    // Market value t(n) = t(n - 1) * 0.99
    'Market Value': [2990000, 2930200, 2871596, 2814164.08, 2757880.798, 2702723.182, 2648668.719, 2595695.344, 2543781.438, 2492905.809, 2443047.693, 2394186.739, 2346303.004, 2299376.944, 2253389.405, 2208321.617, 2164155.185, 2120872.081, 2078454.639, 2036885.546, 1996147.836, 1956224.879, 1917100.381, 1878758.374, 1841183.206, 1804359.542, 1768272.351, 1732906.904, 1698248.766, 1664283.791, 1630998.115, 1598378.153, 1566410.59, 1535082.378, 1504380.73, 1474293.116, 1444807.253, 1415911.108, 1387592.886, 1359841.028, 1332644.208],
    // Accrued Interest t(n) = t(n - 1) * 0.01
    'Accrued Interest': [29900, 29302, 28715.96, 28141.6408, 27578.80798, 27027.23182, 26486.68719, 25956.95344, 25437.81438, 24929.05809, 24430.47693, 23941.86739, 23463.03004, 22993.76944, 22533.89405, 22083.21617, 21641.55185, 21208.72081, 20784.54639, 20368.85546, 19961.47836, 19562.24879, 19171.00381, 18787.58374, 18411.83206, 18043.59542, 17682.72351, 17329.06904, 16982.48766, 16642.83791, 16309.98115, 15983.78153, 15664.1059, 15350.82378, 15043.8073, 14742.93116, 14448.07253, 14159.11108, 13875.92886, 13598.41028, 13326.44208],
    // Market value t(n) = t(n - 1) * 0.98
    'Net yield': [0.03, 0.0294, 0.028812, 0.02823576, 0.0276710448, 0.0271176239, 0.02657527143, 0.026043766, 0.02552289068, 0.02501243286, 0.02451218421, 0.02402194052, 0.02354150171, 0.02307067168, 0.02260925824, 0.02215707308, 0.02171393162, 0.02127965299, 0.02085405993, 0.02043697873, 0.02002823915, 0.01962767437, 0.01923512088, 0.01885041846, 0.0184734101, 0.01810394189, 0.01774186306, 0.01738702579, 0.01703928528, 0.01669849957, 0.01636452958, 0.01603723899, 0.01571649421, 0.01540216433, 0.01509412104, 0.01479223862, 0.01449639385, 0.01420646597, 0.01392233665, 0.01364388992, 0.01337101212],
  },
};
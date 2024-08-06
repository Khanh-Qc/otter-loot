const metric = {
    targetMetrics: {
        TGT_DayPlay: 90,
        TGT_SessionPerDay: 3,
        TGT_PlayMinutesPerDay: 30,
        TGT_TargetOtterLevel: 100
    },
    exchangeRate: {
        DiamondToUSD: 10,
        CoinToEnergy: 20000,
        EnergyToUSD: 20,
        InflationRate: 500,
        InflationCycle: 100,
        PlayTimeToUSD: 5,
        EnergyToPlayTime: 0.3,
        BaseCoinItemValue: 0.005
    },
    diamond: {
        TGT_DiamondInFromQuest_Rate: 0.5,
        TGT_DiamondInFromAchievement_Rate: 0.5,
        TGT_DiamondInFromQuestDaily: 50,
        TGT_DiamondOutForAutoRaid: 0.5,
        TGT_DiamondOutForAutoSteal: 0.5
    },
    coin: {
        TGT_CoinOut_Rate: 1,
        TGT_CoinOutFromUpgrade_Rate: 0.6,
        TGT_CoinOutFromRaid_Rate: 0.25,
        TGT_CoinOutFromSteal_Rate: 0.15,
        CoinUpgradeCurve: 1.2,
        CoinInCurve: 0.8
    },
    pool: {
        CoinOutFromRaidCurve: 1.2,
        TGT_CoinInOverForRaid_Rate: 0.5,
        CoinOutFromStealCurve: 1.2,
        TGT_CoinInOverForSteal_Rate: 0.5
    },
    raid: {
        DefaultInvulnerableCooldown: 360,
        TGT_FirstDefenseTimeAfterFirstLogin: 30,
        TGT_SystemAttackBufferTime: 60
    },
    steal: {
        DefaultStealProtectionCooldown: 360,
        TGT_InventoryStealRate: 0.2,
        TGT_MinMatchingRangeRate: 0.5,
        TGT_MaxMatchingRangeRate: 0.5,
        TGT_FirstStealTimeAfterFirstLogin: 30,
        TGT_SystemStealBufferTime: 30,
        TGT_MaxSlotInSteal: 4,
        StealTimeOut: 30,
        ChangeStealUser_Rate: 0.5
    },
    otter: {
        TGT_OtterUpgradeZone: 6,
        TGT_StarUpgradePerZone: 3,
        TGT_ZoneHealPrices: 0.5,
        BaseOtterPrice: 10,
        OtterPriceSpace: 1,
        OtterPricesCurve: 0.5
    },
    spin: {
        multiRatio: {
        1: 1 ,
        2: 2 ,
        3: 5 ,
        4: 6 ,
        5: 10 ,
        6: 20 ,
        7: 30 ,
        8: 50 ,
        9: 80 ,
        10: 180 ,
        11: 200 ,
        12: 250 ,
        13: 300
        },
        TGT_ReturnToPlayer: 1
    },
    energy: {
        MaxEnergy: 50
    }
}

const DATA = {
    mainPool: [
        {combo: "Coin", status: "", tag: "", multiplyRatio: 1, id: 1, convertToUSD: 0.005},
        {combo: "Coin", status: "Coin", tag: "", multiplyRatio: 2, id: 2, convertToUSD: 0.010},
        {combo: "Coin Bag", status: "", tag: "", multiplyRatio: 5, id: 3, convertToUSD: 0.025},
        {combo: "Event Item", status: "Event Item", tag: "Event Item", multiplyRatio: 6, id: 4, convertToUSD: 0.030},
        {combo: "Coin Bag", status: "Coin Bag", tag: "", multiplyRatio: 10, id: 5, convertToUSD: 0.050},
        {combo: "Coin", status: "Coin", tag: "Coin", multiplyRatio: 20, id: 6, convertToUSD: 0.100},
        {combo: "Shield", status: "Shield", tag: "Shield", multiplyRatio: 30, id: 7, convertToUSD: 0.500},
        {combo: "Raid", status: "Raid", tag: "Raid", multiplyRatio: 50, id: 8, convertToUSD: 0.250},
        {combo: "Coin Bag", status: "Coin Bag", tag: "Coin Bag", multiplyRatio: 80, id: 9, convertToUSD: 0.400},
        {combo: "Raid", status: "Raid", tag: "Raid", multiplyRatio: 180, id: 10, convertToUSD: 0.900},
        {combo: "Energy", status: "Energy", tag: "Energy", multiplyRatio: 200, id: 11, convertToUSD: 1.000},
        {combo: "Steal", status: "Steal", tag: "Steal", multiplyRatio: 250, id: 12, convertToUSD: 1.250},
        {combo: "Steal", status: "Steal", tag: "Steal", multiplyRatio: 300, id: 13, convertToUSD: 1.500}
    ],
    statusTagData: [
        { ID: "CB_1", Status: "null", Tag: "null" },
        { ID: "CB_2", Status: "null", Tag: "null" },
        { ID: "CB_3", Status: "null", Tag: "null" },
        { ID: "CB_4", Status: "null", Tag: "null" },
        { ID: "CB_5", Status: "null", Tag: "null" },
        { ID: "CB_6", Status: "Win", Tag: "null" },
        { ID: "CB_7", Status: "Win", Tag: "null" },
        { ID: "CB_8", Status: "Failed", Tag: "BigWin" },
        { ID: "CB_9", Status: "Win", Tag: "null" },
        { ID: "CB_10", Status: "Success", Tag: "BigWin" },
        { ID: "CB_11", Status: "null", Tag: "null" },
        { ID: "CB_12", Status: "Miss", Tag: "BigWin" },
        { ID: "CB_13", Status: "Full", Tag: "BigWin" },
    ],
    emptySlotPool1: [
        {id: 1, item: "Event Item", weight: 1, ratio: 0.2},
        {id: 2, item: "Energy", weight: 1, ratio: 0.2},
        {id: 3, item: "Raid", weight: 1, ratio: 0.2},
        {id: 4, item: "Shield", weight: 1, ratio: 0.2},
        {id: 5, item: "Steal", weight: 1, ratio: 0.2}
    ],
    emptySlotPool2: [
        {id: 1, combo: ["Event Item", "Event Item"], weight: 1, ratio: 0.17},
        {id: 2, combo: ["Energy", "Energy"], weight: 1, ratio: 0.17},
        {id: 3, combo: ["Raid", "Raid"], weight: 1, ratio: 0.17},
        {id: 4, combo: ["Shield", "Shield"], weight: 1, ratio: 0.17},
        {id: 5, combo: ["Steal", "Steal"], weight: 1, ratio: 0.17},
        {id: 6, combo: "emptySlotPool1", weight: 1, ratio: 0.17}
    ]
};

const spinRule = {
    spin: {
        TGT_ReturnToPlayer: 1
    },
    ACT_TempSpinValue: 0
}

// Hàm làm tròn số gần nhất và chia hết cho 5
function roundNearestFive(number) {
    let roundedNumber = Math.floor(number);
    let remainder = roundedNumber % 5;

    if (remainder >= 3) {
        roundedNumber += (5 - remainder);
    } else {
        roundedNumber -= remainder;
    }

    return roundedNumber;
}


const support = {
    findMaxNumber: (arr) => {
        let max = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].multiplyRatio >= max) {
                max = arr[i].multiplyRatio;
            }
        }
        return max;
    },

    calcActComboRatio: (combo, maxMainPool, arr, spinRatioConstant) => {
        const index = combo - 1;
        const actComboWeight = Math.pow(arr[index].multiplyRatio / maxMainPool, spinRatioConstant);
        
        let totalActComboWeight = 0;
        for (let i = 0; i < arr.length; i++) {
            totalActComboWeight += Math.pow(arr[i].multiplyRatio / maxMainPool, spinRatioConstant);
        }
        
        let ACT_ComboRatio = actComboWeight / totalActComboWeight
        
        return {
            actComboWeight,
            totalActComboWeight,
            ACT_ComboRatio
        };
    },

    calcReward: (combo, arr, coinItemValueAtOtterLevel) => {
        // Early return for special combos
        if (combo === 4) {
          return "10 item Event";
        } else if (combo === 11) {
          return "10 Energy";
        }
      
        // Validate combo range
        if (combo <= 0 || combo >= 14) {
          console.warn("Invalid combo value:", combo);
          return; // Or throw an error if strict behavior is needed
        }
      
        const index = combo - 1;
        const reward = coinItemValueAtOtterLevel * arr[index].multiplyRatio;
        return reward;
      }
      ,
      calcCoinOverTake: (TGT_CoinInPool, ACT_CoinInPool) => {
        let TGT_CoinOverTake = ACT_CoinInPool - TGT_CoinInPool
        if(TGT_CoinOverTake > 0) {
            return TGT_CoinOverTake
        }else {
            return 0
        }
      },
      calcTgtCoinOutUnlockFromRaidDay: (TOT_CoinOut, TGT_CoinOutFromRaid_Rate, DayLoged, CoinOutFromRaidCurve, TGT_CoinOverTake, TGT_CoinInOverForRaid_Rate) => {
        let sigma = 0
        let total
        for(let i = 1; i <= metric.targetMetrics.TGT_DayPlay; i++){
            sigma += Math.pow(i, CoinOutFromRaidCurve)
        }
        total = TOT_CoinOut * TGT_CoinOutFromRaid_Rate * (Math.pow(DayLoged , CoinOutFromRaidCurve ) / sigma ) + TGT_CoinOverTake * TGT_CoinInOverForRaid_Rate
        return total
      },
      calcTgtCoinOutUnlockFromStealDay: (TOT_CoinOut, TGT_CoinOutFromSteal_Rate, DayLoged, CoinOutFromStealCurve, TGT_CoinOverTake, TGT_CoinInOverForSteal_Rate) => {
        let sigma = 0
        let total
        for(let i = 1; i <= metric.targetMetrics.TGT_DayPlay; i++){
            sigma += Math.pow(i, CoinOutFromStealCurve)
        }
        total = TOT_CoinOut * TGT_CoinOutFromSteal_Rate * (Math.pow(DayLoged , CoinOutFromStealCurve ) / sigma ) + TGT_CoinOverTake * TGT_CoinInOverForSteal_Rate
        return total
      },
      calcSumCoinOut: (oldValue, newValue ) => {
        return oldValue + newValue
      },

    // Function calculate CoinItemValueAtOtterLevel
    calcCoinItemValueAtOtterLevel: (CoinUSDAtOtterLevel_Rate , BaseCoinItemValue) =>  {
        return Math.round((CoinUSDAtOtterLevel_Rate * BaseCoinItemValue) / 100) * 100
    },

// Hàm tính năng lượng tối đa
countMaxEnergy: (ACTCurOtterLevel) => {
    const baseEnergy = 50;
    const inflatedEnergy = baseEnergy * (1 + metric.coin.EnergyInflation_Rate) ** Math.floor(ACTCurOtterLevel / metric.coin.EnergyInflationCycle);
    return roundNearestFive(inflatedEnergy); // Làm tròn tới số chia hết cho 5 gần nhất
},

// function tính tổng số coin cần Upgrade để lên level
countTgtTotalCoinUpgradeOfOtterLevel: (ACTOtterLevel, CoinUpgradeCurve, TGT_CoinOutFromUpgrade_Rate, TOT_CoinOut) =>  {
    let sigma = 0;
    let total
    for (let i = 1; i <= metric.targetMetrics.TGT_TargetOtterLevel; i++) {
        sigma += Math.pow(i, CoinUpgradeCurve);
    }
    total = TGT_CoinOutFromUpgrade_Rate * TOT_CoinOut  * (Math.pow(ACTOtterLevel , CoinUpgradeCurve) / sigma )
    return total;
},

// Function check ACT purcharge IAP
calculateACTIAPConvertToCoin: (iapPurchasePriceInUSD, usdRate, inflationRate, actOtterLevel, inflationCycle) => {
    // Kiểm tra xem các giá trị đầu vào có hợp lệ hay không
    if (isNaN(iapPurchasePriceInUSD) || isNaN(usdRate) || isNaN(inflationRate) || isNaN(actOtterLevel) || isNaN(inflationCycle)) {
      throw new Error("Giá trị đầu vào không hợp lệ");
    }
  
    // Tính toán số chu kỳ lạm phát
    const inflationCycles = Math.floor(actOtterLevel / inflationCycle);
  
    // Tính toán tỷ lệ lạm phát tích lũy
    const accumulatedInflationRate = Math.pow(1 + inflationRate, inflationCycles);
  
    // Tính toán giá trị ACT_IAPConvertToCoin
    const actIAPConvertToCoin = iapPurchasePriceInUSD * usdRate * accumulatedInflationRate;
  
    return actIAPConvertToCoin;
  },

  // Function count ACTSpin
  calculateACTSpinFromDiamondConvertToCoin: (ACT_DiamondUsed , CoinDiamondAtOtterLevel) => {
    return ACT_DiamondUsed * CoinDiamondAtOtterLevel;
  },

// Function coun Total CoinInPool
countTGTCoinInPoolUnclockDay: (TOT_CoinIn, Dayloged, CoinInCurve , actIAPConvertToCoin, actSpinFromDiamondConvertToCoin) =>  {
    let sigma = 0;
    let total
    for (let i = 1; i <= metric.targetMetrics.TGT_DayPlay; i++) {
        sigma += Math.pow(i, metric.coin.CoinInCurve);
    }
    total = TOT_CoinIn  * (Math.pow(DayLoged , metric.coin.CoinInCurve) / sigma ) + actIAPConvertToCoin + actSpinFromDiamondConvertToCoin
    return total;
},

// Function count SpinRatio
calcACTSpinRatioConstanst: (TGT_CoinInPool, ACT_CoinInPool) => {
    if (typeof TGT_CoinInPool !== "number" || typeof ACT_CoinInPool !== "number") {
        throw new Error("Invalid arguments: both arguments must be numbers");
      }
      let ACT_SpinRationConstanst = Math.min(TGT_CoinInPool /  ACT_CoinInPool, 1.1) - 1.8
      return ACT_SpinRationConstanst;
},
    parseIntNumber: (value) => {
        return parseInt(value)
    },
    
    //Find convert UDS value
    findConvertUSDValue: (id) => {
        let item = DATA.mainPool.find(element => element.id === id)
        return item.convertToUSD
    },

    sum: (...args) => {
        return args.reduce( (accumulates , current) => accumulates + current , 0)
    },

    countBigWin: (ACT_TempSpinValue , TGT_ReturnToPlayer) => {
        if(ACT_TempSpinValue >= (ACT_TempSpinValue * 0.5)){
            return 1
        }else if (ACT_TempSpinValue >= (ACT_TempSpinValue)){
            ACT_TempSpinValue = 0
            return 2
        }else {
            console.log("error")
        }
    },

    checkBonusWeight: (ACT_EnergyCanGetWithCase, ACT_SpinMissing) => {
        if(ACT_EnergyCanGetWithCase > ACT_SpinMissing){
            return -1;
        }else if (ACT_EnergyCanGetWithCase <= ACT_SpinMissing){
            return ACT_EnergyCanGetWithCase ;
        }else {
            return null
        }
    },

    calcNewWeight: (bonusWeight, weight, ACT_PlayTimeIntervalToGetSpin, TGT_PlayTimeIntervalToGetSpin, TGT_EneryLeftInventory, ACT_EnergyLeftInventory) => {
        return weight * (Math.min(0,bonusWeight)+ 1) + 
        Math.max(bonusWeight * Math.floor(ACT_PlayTimeIntervalToGetSpin / TGT_PlayTimeIntervalToGetSpin), 0) * 
        Math.max(bonusWeight * Math.floor(TGT_EneryLeftInventory / ACT_EnergyLeftInventory) , 0)
    },

    calcTotCoinIn: (TGT_DayPlay, TGT_PlayMinutesPerDay, PlayTimeToUSD, InflationRate, TGT_TargetOtterLevel, InflationCycle) => {
        let a1 = (TGT_DayPlay * TGT_PlayMinutesPerDay) / PlayTimeToUSD
        let a2 = 200000 * Math.pow(1 + (1 + InflationRate), TGT_TargetOtterLevel / InflationCycle)
        return Math.ceil(( a1 * a2 ) / 2)
    },

    calcBaseCoinItemValue: (EnergyToUSD) => {
        return (1 / 10) * (1 / EnergyToUSD)
    },

    calcOtterPriceInUSDAtLevel: (ACTOtterLevel, OtterPriceSpace,BaseOtterPrice, OtterPricesCurve) => {
        let sigma = 0
        for (let i = 1; i <= OtterPriceSpace; i++){
            sigma += Math.pow(i, OtterPricesCurve)
        }
        let total = BaseOtterPrice * (Math.pow(ACTOtterLevel, OtterPricesCurve) / sigma )
        return total
    },

    calcCoinUSDAtLevel_Rate: (TGT_TotalCoinUpgradeOfOtterLevel, TGT_OtterPriceInUSDAtLevel) => {
        return Math.round(TGT_TotalCoinUpgradeOfOtterLevel / TGT_OtterPriceInUSDAtLevel)
    },

    calcCoinDiamondAtOtterLevel: (CoinUSDAtOtterLevel_Rate, DiamondToUSD) =>  {
        return (CoinUSDAtOtterLevel_Rate / DiamondToUSD)
    },

    calcACTIAPConvertToCoin: (IAPPurchargePriceInUSD, CoinUSDAtOtterLevel_Rate) => {
        return IAPPurchargePriceInUSD * CoinUSDAtOtterLevel_Rate
    },

    calcEnergyRegen: (TGT_SessionPerDay, MaxEnergy)=> {
        return (TGT_SessionPerDay * MaxEnergy ) / 24
    }
};

// Thong so thay doi
let ACTCurOtterLevel = 2ACT_SpinRatioConstanst;
let ACTIAPPurcharge = 0
let IAPPurchargePriceInUSD = 0
let ACTDiamondUsed = 0
let DayLoged = 1
let TGT_CoinInPool = 14670144.46487494
let ACT_CoinInPool = 14815000
let ACT_CurSpin = 27
let combo = 3


let TOT_DiamondInFromQuest = metric.targetMetrics.TGT_DayPlay * metric.diamond.TGT_DiamondInFromQuestDaily;
console.log('TOT_DiamondInFromQuest:', TOT_DiamondInFromQuest);

let TOT_DiamondInFromAchievement = (TOT_DiamondInFromQuest / metric.diamond.TGT_DiamondInFromQuest_Rate) * metric.diamond.TGT_DiamondInFromAchievement_Rate;
console.log('TOT_DiamondInFromAchievement:', TOT_DiamondInFromAchievement);

let TOT_DiamondIn = TOT_DiamondInFromQuest / metric.diamond.TGT_DiamondInFromQuest_Rate;
console.log('TOT_DiamondIn:', TOT_DiamondIn);

let DiamondOutForAutoRaid = TOT_DiamondIn * metric.diamond.TGT_DiamondOutForAutoRaid;
console.log('DiamondOutForAutoRaid:', DiamondOutForAutoRaid);

let DiamondOutForAutoSteal = TOT_DiamondIn * metric.diamond.TGT_DiamondOutForAutoSteal;
console.log('DiamondOutForAutoSteal:', DiamondOutForAutoSteal);

let TOT_CoinIn = support.calcTotCoinIn(
    metric.targetMetrics.TGT_DayPlay,
    metric.targetMetrics.TGT_PlayMinutesPerDay,
    metric.exchangeRate.PlayTimeToUSD,
    metric.exchangeRate.InflationRate,
    metric.targetMetrics.TGT_TargetOtterLevel,
    metric.exchangeRate.InflationCycle
);
console.log('TOT_CoinIn:', TOT_CoinIn);

let TOT_CoinOut = TOT_CoinIn * metric.coin.TGT_CoinOut_Rate;
console.log('TOT_CoinOut:', TOT_CoinOut);

let energyRegen = support.calcEnergyRegen(metric.targetMetrics.TGT_SessionPerDay, metric.energy.MaxEnergy);
console.log('energyRegen:', energyRegen);

let TGT_TotalCoinUpgradeOfOtterLevel = support.countTgtTotalCoinUpgradeOfOtterLevel(
    ACTCurOtterLevel,
    metric.coin.CoinUpgradeCurve,
    metric.coin.TGT_CoinOutFromUpgrade_Rate,
    TOT_CoinOut
);
console.log('TGT_TotalCoinUpgradeOfOtterLevel:', TGT_TotalCoinUpgradeOfOtterLevel);

let BaseCoinItemValue = support.calcBaseCoinItemValue(metric.exchangeRate.EnergyToUSD);
console.log('BaseCoinItemValue:', BaseCoinItemValue);

let TGT_OtterPriceInUSDAtLevel = support.calcOtterPriceInUSDAtLevel(
    ACTCurOtterLevel,
    metric.otter.OtterPriceSpace,
    metric.otter.BaseOtterPrice,
    metric.otter.OtterPricesCurve
);
console.log('TGT_OtterPriceInUSDAtLevel:', TGT_OtterPriceInUSDAtLevel);

let CoinUSDAtOtterLevel_Rate = support.calcCoinUSDAtLevel_Rate(TGT_TotalCoinUpgradeOfOtterLevel, TGT_OtterPriceInUSDAtLevel);
console.log('CoinUSDAtOtterLevel_Rate:', CoinUSDAtOtterLevel_Rate);

let CoinDiamondAtOtterLevel = support.calcCoinDiamondAtOtterLevel(
    CoinUSDAtOtterLevel_Rate, 
    metric.exchangeRate.DiamondToUSD
);
console.log('CoinDiamondAtOtterLevel:', CoinDiamondAtOtterLevel);

let coinItemValueAtOtterLevel = support.calcCoinItemValueAtOtterLevel(
    CoinUSDAtOtterLevel_Rate,
    BaseCoinItemValue
);
console.log('coinItemValueAtOtterLevel:', coinItemValueAtOtterLevel);


// Chưa tính CoinClaimComboShield
// let CoinClaimCombo = coinItemValueAtOtterLevel * metric.spin[ACTCurOtterLevel]
let ACT_IAPConvertToCoin = support.calcACTIAPConvertToCoin(IAPPurchargePriceInUSD, CoinUSDAtOtterLevel_Rate)
console.log('ACT_IAPConvertToCoin:', ACT_IAPConvertToCoin);
let ACT_SpinFromDiamondConvertToCoin = support.calculateACTSpinFromDiamondConvertToCoin(ACTDiamondUsed, CoinDiamondAtOtterLevel);
console.log('ACT_SpinFromDiamondConvertToCoin:', ACT_SpinFromDiamondConvertToCoin);
let TGT_CoinInPoolUnlockDay = support.countTGTCoinInPoolUnclockDay(TOT_CoinIn, DayLoged, metric.coin.CoinInCurve, ACT_IAPConvertToCoin, ACT_SpinFromDiamondConvertToCoin)
console.log('TGT_CoinInPoolUnlockDay:', TGT_CoinInPoolUnlockDay);

// Calc ACT_CoinFromRaidDay
let TGT_CoinOverTake = support.calcCoinOverTake(TGT_CoinInPool, ACT_CoinInPool)

let TGT_CoinOutPoolFromRaidDay = support.calcTgtCoinOutUnlockFromRaidDay(
    TOT_CoinOut, 
    metric.coin.TGT_CoinOutFromRaid_Rate, 
    DayLoged, 
    metric.pool.CoinOutFromRaidCurve, 
    TGT_CoinOverTake, 
    metric.pool.TGT_CoinInOverForRaid_Rate
)
let TGT_CoinOutPoolFromStealDay = support.calcTgtCoinOutUnlockFromStealDay(
    TOT_CoinOut, 
    metric.coin.TGT_CoinOutFromSteal_Rate, 
    DayLoged, 
    metric.pool.CoinOutFromStealCurve, 
    TGT_CoinOverTake, 
    metric.pool.TGT_CoinInOverForSteal_Rate
)

let tgtCoinOutFromRaid = 744335 + 216372280
let tgtCoinOutFromSteal = 448601 + 215600953

console.log(`tgtCoinOutFromRaid: ${tgtCoinOutFromRaid}`)
console.log(`tgtCoinOutFromSteal: ${tgtCoinOutFromSteal}`)


console.log("--------------->")
console.log(`TGT_CoinOverTake: ${TGT_CoinOverTake}`)
console.log(`TGT_CoinOutPoolFromRaidDay: ${TGT_CoinOutPoolFromRaidDay}`)
console.log(`TGT_CoinOutPoolFromStealDay: ${TGT_CoinOutPoolFromStealDay}`)

// Calc tgtCoinOutFromRaid => chưa tính được số TGT
let TGT_CoinOutFromRaid = support.calcSumCoinOut(0, TGT_CoinOutPoolFromRaidDay)
let TGT_CoinOutFromSteal = support.calcSumCoinOut(0, TGT_CoinOutPoolFromStealDay)

// Calc ACT_CoinOutFromRaidDay
let CoinClaimComboShield = coinItemValueAtOtterLevel * DATA.mainPool[6].multiplyRatio

// Calc ACT_SpinRatioConstanst
let ACT_SpinRatioConstanst = support.calcACTSpinRatioConstanst(TGT_CoinInPool, ACT_CoinInPool)
console.log('ACT_SpinRatioConstanst:', ACT_SpinRatioConstanst);

// Calc spin
let maxMultiRatio = support.findMaxNumber(DATA.mainPool)
console.log('maxMultiRatio:', maxMultiRatio)
let ACT_Comboweight = support.calcActComboRatio(combo , maxMultiRatio, DATA.mainPool, ACT_SpinRatioConstanst ).actComboWeight
console.log('ACT_Comboweight:', ACT_Comboweight);
let TotalAllComboWeight = support.calcActComboRatio(combo , maxMultiRatio, DATA.mainPool, ACT_SpinRatioConstanst ).totalActComboWeight
console.log('TotalAllComboWeight:', TotalAllComboWeight);
let ACT_ComboRatio = support.calcActComboRatio(combo , maxMultiRatio, DATA.mainPool, ACT_SpinRatioConstanst ).ACT_ComboRatio
console.log('ACT_ComboRatio:', ACT_ComboRatio);

let AVG_StealMissReward
let AVG_StealFullReward
let coinClaimComboShield
let reward

if(combo === 12) {
    AVG_StealMissReward = support.calcReward(combo, DATA.mainPool, coinItemValueAtOtterLevel)
}else if (combo === 13){
    AVG_StealFullReward = support.calcReward(combo, DATA.mainPool, coinItemValueAtOtterLevel)
}else if (combo === 7){
    coinClaimComboShield = support.calcReward(combo, DATA.mainPool, coinItemValueAtOtterLevel)
}else {
    reward = support.calcReward(combo, DATA.mainPool, coinItemValueAtOtterLevel)
}

console.log(`reward: ${reward}`)
console.log("--------------->")

// Cơ chế đảm bảo của Spin 
let ACT_TempSpinValue = support.sum(
    support.findConvertUSDValue(10), 
    support.findConvertUSDValue(13), 
    support.findConvertUSDValue(9), 
    support.findConvertUSDValue(1),
    support.findConvertUSDValue(2)
)
let bigWin = support.countBigWin(ACT_TempSpinValue, spinRule.spin.TGT_ReturnToPlayer)

let ACT_CoinMissing = TGT_CoinInPool - ACT_CoinInPool
let ACT_SpinMissing = (ACT_CoinMissing / metric.exchangeRate.CoinToEnergy) - ACT_CurSpin
console.log(`ACT_CoinMissing: ${ACT_CoinMissing}`)
console.log(`ACT_SpinMissing: ${ACT_SpinMissing}`)

let ACT_EnergyCanGetWithCase = 10
let bonusWeight = support.checkBonusWeight(ACT_EnergyCanGetWithCase, ACT_SpinMissing)
let newWeight = support.calcNewWeight(bonusWeight, 20, 3, 2, 0.2,  0.15)
console.log(`bonusWeight: ${bonusWeight}`)
console.log(`newWeight: ${newWeight}`)


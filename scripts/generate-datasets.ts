/* eslint-disable */
import { initialConditions } from './generate-dataset-data';

const initialAssetId = 4;
// const numberToGenerate = 2;
const numberToGenerate = 47;

const generateAsset = (
  assetId: number,
  valueMultiplier: number,
  interestMultiplier: number,
  yieldMultiplier: number,
) => {
  const initialConditionKeys = Object.keys(initialConditions)
  const randomIdx = Math.floor(initialConditionKeys.length * Math.random());
  const randomInitialConditionKey = initialConditionKeys[randomIdx];
  const initialConditionAsset: any = (initialConditions as any)[randomInitialConditionKey];

  return {
    id: assetId,
    'Book Value': generateSequence(initialConditionAsset['Book Value'], valueMultiplier),
    'Market Value': generateSequence(initialConditionAsset['Market Value'], valueMultiplier),
    'Accrued Interest': initialConditionAsset['Market Value'].map((val: number) => val * interestMultiplier),
    'Net yield': generateSequence(initialConditionAsset['Net yield'], yieldMultiplier),
  }
};

const generateSequence = (values: number[], multiplier: number) => {
  return [
    values[0],
    values.slice(1).map((value, idx) => {
      return values[idx] * multiplier
    })
  ];
};

const printableAssets = (assets: any[]) => {
  return assets.map(asset => {
    const line1 = `${asset.id},Book Value,${asset['Book Value']}`;
    const line2 = `${asset.id},Market Value,${asset['Market Value']}`;
    const line3 = `${asset.id},Accrued Interest,${asset['Accrued Interest']}`;
    const line4 = `${asset.id},Net yield,${asset['Net yield']}`;
    return `${line1}\n${line2}\n${line3}\n${line4}∂œ`
  })
};

export const run = () => {
  console.log(`generate-dataset running...`);
  let multipliers: any = [];
  const assets = Array.from({ length: numberToGenerate }, (_, idx) => {
    const assetId = idx + initialAssetId;

    const valueMultiplier = (0.2 * Math.random()) + 0.8;
    const interestMultiplier = 0.1 * Math.random()
    const yieldMultiplier = 0.1 * Math.random() + 0.9;
    multipliers.push({
      assetId,
      valueMultiplier,
      interestMultiplier,
      yieldMultiplier,
    });
    return generateAsset(assetId, valueMultiplier, interestMultiplier, yieldMultiplier);
  });

  console.log(`multipliers...\n`, multipliers);
  console.log(`assets...\n`);
  printableAssets(assets).forEach(asset => console.log(asset));
  console.log(`generate-dataset done!!!`);
}
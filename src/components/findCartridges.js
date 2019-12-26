export const cartridges = [{
   name: '30-30 win',
   caseType: 'a',
   bulletDiameter: .308,
   neckDiameter: .328,
   shoulderDiameter: .402,
   baseDiameter: .422,
   rimDiameter: .502,
   rimThickness: .058,
   caseLength: 2.03,
   cartridgeLength: 2.53,
   primer: 'l'
},
{
   name: '30 american',
   caseType: 'a',
   bulletDiameter: .308,
   neckDiameter: .328,
   shoulderDiameter: .402,
   baseDiameter: .422,
   rimDiameter: .502,
   rimThickness: .058,
   caseLength: 2.03,
   cartridgeLength: 2.53,
   primer: 's'
},
{
   name: '30-30 ackley improved',
   caseType: 'a',
   bulletDiameter: .308,
   neckDiameter: .328,
   shoulderDiameter: .405,
   baseDiameter: .422,
   rimDiameter: .502,
   rimThickness: .058,
   caseLength: 2.04,
   cartridgeLength: 2.54,
   primer: 'l'
},
{
   name: '7.62x51mm nato',
   caseType: 'c',
   bulletDiameter: .308,
   neckDiameter: .338,
   shoulderDiameter: .447,
   baseDiameter: .466,
   rimDiameter: .470,
   rimThickness: .049,
   caseLength: 2.01,
   cartridgeLength: 2.75,
   primer: 'bx'
},
{
   name: '300 rem saum',
   caseType: 'i',
   bulletDiameter: .308,
   neckDiameter: .344,
   shoulderDiameter: .534,
   baseDiameter: .550,
   rimDiameter: .534,
   rimThickness: .050,
   caseLength: 2.015,
   cartridgeLength: 2.450,
   primer: 'l'
},
{
   name: '7.82 lazeroni patriot',
   caseType: 'c',
   bulletDiameter: .308,
   neckDiameter: .340,
   shoulderDiameter: .557,
   baseDiameter: .557,
   rimDiameter: .557,
   rimThickness: .060,
   caseLength: 2.05,
   cartridgeLength: 2.8,
   primer: 'l'
},
{
   name: '308 winchester',
   caseType: 'c',
   bulletDiameter: .308,
   neckDiameter: .344,
   shoulderDiameter: .454,
   baseDiameter: .470,
   rimDiameter: .470,
   rimThickness: .049,
   caseLength: 2.01,
   cartridgeLength: 2.75,
   primer: 'l'
},
]
//
// let filterList = []
//
// const variancePlus = (amount, type) => {
//    console.log('+variance ', amount, ' +reading ', type, 'result', type + amount)
//    return amount + type
// }
// const varianceMinus = (amount, type) => {
//    console.log('-variance ', amount, ' -reading ', type, 'result', type - amount)
//    return type - amount
// }
//
// const getCartridges = (amount, type) => {
//    if (type === 'c') {
//       filterList = cartridges.filter(item => item.caseType === type)
//    } else {
//       filterList = filterList.filter(item => item.bulletDiameter < variancePlus(amount, type) && item.bulletDiameter > varianceMinus(amount, type))
//    }
//
// };
// const getCartridges1 = (amount, type) => {
//    if (type) {
//       filterList = filterList.filter(item => item.neckDiameter < variancePlus(amount, type) && item.neckDiameter > varianceMinus(amount, type))
//    }
//
// };
// const getCartridges2 = (amount, type) => {
//    if (type) {
//       filterList = filterList.filter(item => item.shoulderDiameter < variancePlus(amount, type) && item.shoulderDiameter > varianceMinus(amount, type))
//    }
//
// };
// const getCartridges3 = (amount, type) => {
//    if (type) {
//       filterList = filterList.filter(item => item.baseDiameter < variancePlus(amount, type) && item.baseDiameter > varianceMinus(amount, type))
//    }
//
// };
// const getCartridges4 = (amount, type) => {
//    if (type) {
//       filterList = filterList.filter(item => item.rimDiameter < variancePlus(amount, type) && item.rimDiameter > varianceMinus(amount, type))
//    }
//
// };
// const getCartridges5 = (amount, type) => {
//    if (type) {
//       filterList = filterList.filter(item => item.rimThickness < variancePlus(amount, type) && item.rimThickness > varianceMinus(amount, type))
//    }
//
// };
// const getCartridges6 = (amount, type) => {
//    if (type) {
//       filterList = filterList.filter(item => item.caseLength < variancePlus(amount, type) && item.caseLength > varianceMinus(amount, type))
//    }
//
// };
// const getCartridges7 = (amount, type) => {
//    if (type) {
//       filterList = filterList.filter(item => item.cartridgeLength < variancePlus(amount, type) && item.cartridgeLength > varianceMinus(amount, type))
//    }
//
// };
//
// getCartridges(0, 'c')
// console.log('0', filterList)
// getCartridges(.003, .3065)
// console.log('1', filterList)
// getCartridges1(.008, .339)
// console.log('2', filterList)
// getCartridges2(.008, .449)
// console.log('3', filterList)
// getCartridges3(.008, .468)
// console.log('4', filterList)
// getCartridges4(.003, .468)
// console.log('5', filterList)
// getCartridges5(.003, .049)
// console.log('6', filterList)
// getCartridges6(.01, 2.005)
// console.log('7', filterList)
// getCartridges7(.04, 2.785)
// console.log('8', filterList)
// console.log(varianceMinus(.03, 2.785), variancePlus(.03, 2.785))
//

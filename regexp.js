// let str = "QQA-11100 Reg khkh 345 30hkjh kh.";
// let regexp = /^([A-Z]{3}-[0-9]+)\s+([A-Za-z\d\s+\.-]+)/ig;
// console.log("regexp.test(str)", regexp.test(str));
// ! //////////////////////////////////// Site
// let str = "https://www.javascripttutorial.net";
// https://www.javascripttutorial.net
// http://www.javascripttutorial.net
// https://www.google.com
// https://www.facebook.com
// https://facebook.com
// https://football.ua
// https://24news.ua

// htts://facebook.com
// https:/www.google.com

// let regexp = /(http|https):\/\/[A-Za-z\d\.]+\.(net|com|ua)/g;
// console.log("regexp.test(str)", regexp.test(str));

// ! //////////////////////////////////// Phone number
// let str = "+380967815235";
// +380967815235
// +780967815235

// +845445562305555
// +kl45454
// 546456456

// let regexp = /(\+)[0-9]{12}/g;
// console.log("regexp.test(str)", regexp.test(str));

// ! //////////////////////////////////// Email
// let str = "test@gmail.com";
// test@gmail.com
// 1212@ukr.net
// Qsdf.ssdfs@newfire.com
// Qsdf.ss-dfs.A1wew1@newfire.com
// Qsdf.ss-dfs.A1wew1@neWfire.Com
// 1212@ukr.ua
// oleg.zho_-a11@gmail.com
// career-interests-noreply@linkedin.com
// mozilla@email.mozilla.org
// no-reply+9bf0457f@classroom.google.com
// info@pb.ua
// service@intl.paypal.com

// Qsdf.ss-dfs.A1wew1@neWfire.ru
// asdg.mail.com
// asdg.mail.ru
// 1551@ukr

// let regexp = /(\+)[0-9]{12}/g;
// console.log("regexp.test(str)", regexp.test(str));

// ! ////////////////////////////////////

// ! //////////////////////////////////// Find Date
// let str = "test@gmail.com";
// Asdasd dasadas fsfsdf 24/12/2015.
// 2/12/2015.
// Asds sdfsd fsdf 31.12.2002.
// 33 dfsd sdfsd5 5 fd 55 .
// Addfd 02/12/2020

// let regexp = /([0-3]|[0-9])+\/+([0-9])+\/([0-9]{4})/gm;
// console.log("regexp.test(str)", regexp.test(str));

// ! ////////////////////////////////////
// for (var i = 0; i < 4; i++) {
//   setTimeout(function () {
//     i = i + 1;
//     console.log(i);
//   }, 3000);
// }
// for (let i = 0; i < 4; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, 3000);
// }

// for (var i = 0; i < 4; i++) {
//   function a(i) {
//     return setTimeout(function () {
//       console.log(i);
//     }, 3000);
//   }
//   a(i);
// }

// for (var i = 0; i < 4; i++) {
//   (function (i) {
//     setTimeout(function () {
//       console.log(i);
//     }, 3000);
//   })(i);
// }

// let person = {
//     firstName: 'John',
//     lastName: 'Doe'
// };

// (function () {
//     console.log(person.firstName + ' ' + person.lastName);
// })(person);


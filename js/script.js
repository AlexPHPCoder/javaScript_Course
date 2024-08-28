/* "use strict";
Дает ошибку в синтаксесе гугл хрома ф12 */
alert("For persons over 21 years of age");
let desctopMessage = "Danger content";
desctopMessage = "I claim to be more than 21 years old";
alert(desctopMessage);
/*num = 5;
alert(num);* Пример ошибочного присвоения переменной без let */
const PASSWORD = "Your password";
alert(PASSWORD);
/*PASSWORD = "Welcome";
alert(PASSWORD); пример переназначения константы, результат ошибка 
константы с именами, записанными заглавными буквами, используются только как псевдонимы 
для «жёстко закодированных» значений
*/
let admin, name;
name = "Trump";
admin = name;
alert(admin);
const ITS_PLANET = "Earch";
alert(ITS_PLANET);
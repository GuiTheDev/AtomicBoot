# crypto-global

```shell
npm install crypto-global
```

EN
A fast and stable module that provides information about crypto currencies.


```javascript
const crypto = require('./crypto.js')
async function output() {
    unit = "bitcoin"
    let name = await crypto.name(unit)
    let price = await crypto.try(unit)
    let vol24 = await crypto.vol24(unit)
    let lower = await crypto.lower(unit)
    let higher = await crypto.higher(unit)
    let percent = await crypto.percent(unit)
    let table = await crypto.table(unit)
    let icon = await crypto.icon(unit)
    let all = await crypto.all(unit)
    console.log(name)
    console.log(price)
    console.log(vol24)
    console.log(lower)
    console.log(higher)
    console.log(percent)
    console.log(icon)
    console.log(table)
    console.log(all)

}
output()

```

Data output

```cmd
console.log(name) 

> Bitcoin(BTC)


console.log(all) 

> {
>   name: 'Bitcoin(BTC)',
>   price: '34,943.76',
>   percent: '-7.13',
>   icon: 'https://cdn.discordapp.com/attachments/774285169364172881/800012387742384128/bitcoin.png'
> }
```

#Units
```cmd
You can withdraw by typing the name of the crypto money you choose on the coinmarket.com!
```

#Updates
```
-> Some bugs fixed!
-> Table / Market / Vol24 / Lower / Higher / TRY / USD functions added!
```

const express = require("express");
const {json} = require("express");
const app = express();
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get("/api/flights",(req,res)=>{
   const flights = [
      {id:1, city: "New York", flight: "5FW2H", price:"597 $", date:"Nov 26, 2021"},
      {id:2, city: "Tokyo", flight: "1OFWJ", price:"4567 $", date:"Sep 25, 2022"},
      {id:3, city: "Sydney", flight: "8GE2A", price:"2789 $", date:"Sep 13, 2022"},
      {id:4, city: "Mexico City", flight: "N794G", price:"2345 $", date:"May 15, 2022"},
      {id:5, city: "Rome", flight: "N9187", price:"1268 $", date:"Apr 09, 2022"},
      {id:6, city: "Venecia", flight: "N1044", price:"234 $", date:"Aug 27, 2022"},
      {id:7, city: "Greece", flight: "207RH", price:"3412 $", date:"Jul 12, 2022"},
      {id:8, city: "Delhi", flight: "676KZ", price:"1904 $", date:"Aug 19, 2022"},
      {id:9, city: "Shanghai", flight: "8GE2A", price:"2563 $", date:"Aug 16, 2022"},
      {id:10, city: "Sao Paulo", flight: "497EB", price:"2479 $", date:"Jan 14, 2022"},
      {id:11, city: "Dhaka", flight: "379KR", price:"258 $", date:"Oct 25, 2022"},
      {id:12, city: "Cairo", flight: "455LF", price:"2790 $", date:"Feb 23, 2022"},
      {id:13, city: "Mumbai", flight: "192WZH", price:"2479 $", date:"Dec 04, 2021"},
      {id:14, city: "Beijing", flight: "N19ZJ", price:"321 $", date:"Apr 21, 2022"},
      {id:15, city: "Osaka", flight: "7GM2A", price:"245 $", date:"Jan 08, 2022"},
      {id:16, city: "Karachi", flight: "1FN2B", price:"3236 $", date:"Jan 10, 2022"},
      {id:17, city: "Chongquing", flight: "19DHB", price:"3890 $", date:"Jan 27, 2022"},
      {id:18, city: "Istambul", flight: "8GE2A", price:"5789 $", date:"Apr 20, 2022"},
      {id:19, city: "Buenos Aires", flight: "ET3J5", price:"2356 $", date:"May 19, 2022"},
      {id:20, city: "Kolkata", flight: "3O5JA", price:"4791 $", date:"Feb 03, 2022"},
      {id:21, city: "Kinshasa", flight: "4I2M5", price:"528 $", date:"Jan 24, 2022"},
      {id:22, city: "Lagos", flight: "FR269", price:"1937 $", date:"Mar 29, 2022"},
      {id:23, city: "Manila", flight: "3F4DS", price:"2294 $", date:"Apr 29, 2022"},
      {id:24, city: "Tianjin", flight: "8IFR3", price:"4287 $", date:"Oct 28, 2022"},
      {id:25, city: "Guangzhou", flight: "3EFRA", price:"8934 $", date:"Nov 07, 2022"},
      {id:26, city: "Rio De Janeiro", flight: "3RV57", price:"2781 $", date:"Aug 19, 2022"},
      {id:27, city: "Lahore", flight: "3DEAW", price:"7430 $", date:"Feb 21, 2022"},
      {id:28, city: "Bangalore", flight: "3GEVY", price:"4176 $", date:"Oct 15, 2022"},
      {id:29, city: "Moscow", flight: "67E2E", price:"1654 $", date:"Dec 29, 2021"},
      {id:30, city: "Shenzhen", flight: "RE34F", price:"4761 $", date:"Jan 22, 2022"},
      {id:31, city: "Chennai", flight: "5TGD3", price:"8543 $", date:"Sep 18, 2022"},
      {id:32, city: "Bogota", flight: "X4R57", price:"6517 $", date:"Jun 02, 2022"},
      {id:33, city: "Paris", flight: "3EB67", price:"6728 $", date:"Aug 17, 2022"},
      {id:34, city: "Jakarta", flight: "03DR5", price:"7125 $", date:"Sep 24, 2022"},
      {id:35, city: "Lima", flight: "3RT64", price:"5271 $", date:"Mar 04, 2022"},
      {id:36, city: "Bangkok", flight: "3EF5Y", price:"5276 $", date:"Aug 16, 2022"},
      {id:37, city: "Hyderabad", flight: "3RF6B", price:"187 $", date:"May 05, 2022"},
      {id:38, city: "Seoul", flight: "34F6G", price:"2677 $", date:"Mar 29, 2022"},
      {id:39, city: "Nagoya", flight: "4EC56", price:"2781 $", date:"Jun 09, 2022"},
      {id:40, city: "London", flight: "3F5BH", price:"2981 $", date:"Nov 13, 2022"},
      {id:41, city: "Chengdu", flight: "4FAS4", price:"1726 $", date:"Oct 10, 2022"},
      {id:42, city: "Tehran", flight: "4FVSW", price:"1245 $", date:"Dec 22, 2021"},
      {id:43, city: "Nanjing", flight: "4RGR3", price:"7322 $", date:"Jan 25, 2022"},
      {id:44, city: "Ho Chi Minh City", flight: "3G43G", price:"1525 $", date:"Sep 29, 2022"},
      {id:45, city: "Luanda", flight: "354YH", price:"8362 $", date:"Feb 18, 2022"},
      {id:46, city: "Wuhan", flight: "3F87O", price:"1247 $", date:"Apr 18, 2022"},
      {id:47, city: "Ahmedabad", flight: "4RF57", price:"1676 $", date:"Aug 18, 2022"},
      {id:48, city: "Kuala Lumpur", flight: "2D4J8", price:"251 $", date:"Jul 27, 2022"},
      {id:49, city: "Hangzhou", flight: "3G5H6", price:"247 $", date:"Sep 25, 2022"},
      {id:50, city: "Hong Kong", flight: "3DE4Y", price:"2678 $", date:"Sep 25, 2022"}
   ];
   //console.log(JSON.stringify(flights));
   res.json(flights);
});

const port = 5000

app.listen(port);
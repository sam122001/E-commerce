const express =  require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EmployeeModel= require('./models/Employee')

const app= express()

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/employee')
  .then(() => console.log('Connected!'));

app.post('/register',(req,res)=>{
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
});
const AllProducts = [
  {
    name: "Flowerzz",
    image: "https://cdn.pixabay.com/photo/2015/11/03/10/23/watercolor-1020509_1280.jpg",
    price: 17.99,
  },
  {
    name: "Dark street",
    image: "https://cdn.pixabay.com/photo/2017/08/01/20/06/city-2567670_640.jpg",
    price: 4.99,   
  },
  {
    name: "Her wiskers",
    image: "https://cdn.pixabay.com/photo/2018/01/11/23/16/woman-3077180_1280.jpg",
    price: 256.53,
  },
  {
    name: "Forest Frizz",
    image: "https://cdn.pixabay.com/photo/2019/11/05/16/03/man-4603859_1280.jpg",
    price: 17.99,
  },
  {
    name: "Deer's sight",
    image: "https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_1280.jpg",
    price: 4.99,
  },
  {
    name: "Bliss fish",
    image: "https://cdn.pixabay.com/photo/2013/10/25/20/46/mosaic-200864_1280.jpg",
    price: 19.99,
  },
  {
    name: "Dotty Dot",
    image: "https://cdn.pixabay.com/photo/2016/12/15/20/21/texture-1909992_1280.jpg",
    price: 4.99,
  },
  {
    name: "Deep blue",
    image: "https://cdn.pixabay.com/photo/2019/09/05/05/28/eye-4453129_640.jpg",
    price: 19.99,
  },
  {
    name: "Muddy",
    image: "https://cdn.pixabay.com/photo/2016/10/07/08/56/close-up-1721060_640.jpg",
    price: 4.99,
  },
  {
    name: "skye",
    image: "https://cdn.pixabay.com/photo/2019/05/04/15/24/woman-4178302_1280.jpg",
    price: 19.99,
  },
  {
    name: "blastx",
    image: "https://cdn.pixabay.com/photo/2019/09/24/06/10/insect-4500348_1280.jpg",
    price: 4.99,
  },
  {
    name: "rozee",
    image: "https://cdn.pixabay.com/photo/2016/08/26/01/41/flowers-1621066_640.jpg",
    price: 19.99,
  },
  {
    name: "Monkey D Luffy",
    image: "https://cdn.pixabay.com/photo/2015/05/27/15/49/monkey-786858_1280.png",
    price: 11.99,
  },
  {
    name: "Tarzania",
    image: "https://cdn.pixabay.com/photo/2021/04/07/17/01/woman-6159648_640.jpg",
    price: 19.99,
  },
  {
    name: "Way to hell",
    image: "https://cdn.pixabay.com/photo/2015/04/23/12/32/hell-735995_640.jpg",
    price: 4.99,
  },
  {
    name: "Bye Bye cycle",
    image: "https://cdn.pixabay.com/photo/2017/12/28/16/18/bicycle-3045580_640.jpg",
    price: 19.99,
  },{
    name: "Together",
    image: "https://cdn.pixabay.com/photo/2017/11/20/02/00/fantasy-2964231_640.jpg",
    price: 4.99,
  },
  {
    name: "Warm breeze",
    image: "https://cdn.pixabay.com/photo/2019/02/14/07/28/painting-3995999_640.jpg",
    price: 19.99,
  },
];

app.get('/Allproduct',(req,res)=>{
  res.json(AllProducts);
  console.log(AllProducts)
})
app.post('/AllProducts',(req,res)=>{
  const products= AllProducts.push(req.body)
  console.log(products)
  res.json(products)
})

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    
    const user = await EmployeeModel.findOne({ email:email , password:password });

    if (user.email && user.password) {
    
      res.json(user);
    } else {
      
      res.json({ message: "Email not registered" });
    }
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


  app.listen(3001,()=>{
    console.log("server is running")
  })

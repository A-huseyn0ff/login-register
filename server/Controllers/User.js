import UserScheme from "../Model/User.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const privateKey='Memmed tagi'
export const getUser = async (req, res) => {
    const id = req.params.id;
    const data = await UserScheme.findById(id);
    res.send(data);
  };
  export const getUsers= async (req,res)=>{
    const id = req.params.id;
    const data = await UserScheme.find(id);
    res.send(data);
  }
  export const updateUser = async (req, res) => {
    const id = req.params.id;
    const data = await UserScheme.findByIdAndUpdate(id, req.body);
    res.send(data);
  };
  export const postUser = async (req, res) => {
    const hash= await bcrypt.hash(req.body.password,10)
    const data = await new UserScheme({
      Username: req.body.Username,
      role: req.body.role,
      password: hash,
    });
    data.save();
    res.send({ message: "User registered" });
  };

export const login = async (req, res) => {
    try {
      const Username = req.body.Username;
      const password = req.body.password;
      const data = await UserScheme.findOne({ Username });
  
      if (data) {
        const isPasswordValid = await bcrypt.compare(password, data.password);
  
        if (isPasswordValid) {
          const token = jwt.sign({ Username: Username }, privateKey);
          res.send(token);
        } else {
          res.status(401).send('Invalid password');
        }
      } else {
        res.status(404).send('User not found');
      }
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).send('Internal Server Error');
    }
  };
  export const deleteUser=async (req,res)=>{
    const id = req.params.id;
    const data = await UserScheme.findByIdAndDelete(id);
    res.send(data);
  }
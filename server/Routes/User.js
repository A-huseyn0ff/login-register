import express from 'express'
import { deleteUser, getUser, getUsers, login, postUser, updateUser } from '../Controllers/User.js'

const router = express.Router()


router.get('/user',getUsers)
router.get('/user/:id',getUser)
router.post('/user',postUser)
router.delete('/user/:id',deleteUser)
router.put('/user/:id',updateUser)
router.post('/login',login)

export default router
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
    //IndexController -->GET
public async index(ctx: HttpContextContract){
    //async await (axios)
  const axios = require('axios')
   return axios.get('https://gorest.co.in/public/v1/users')
  // handle success
    .then(response => {
      return response.data
    })
    // handle error
    .catch(error => {
      console.log(error)
    })
  }
  
  
      public async store({request}: HttpContextContract){
        return 'POST'
      }
      public async show({ params }: HttpContextContract){
          return 'GET user: ' + params.id
      }
      public async update({ params }: HttpContextContract){
          return 'PUT user: ' + params.id
      }
      public async destroy({ params }: HttpContextContract){
          return 'DELETE user: ' + params.id
      }
}

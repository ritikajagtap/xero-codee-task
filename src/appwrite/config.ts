import conf from "@/conf/conf";
import {Client, ID, Account} from 'appwrite'

type CreateUserAccount ={
    email: string,
    password: string,
    name: string

}
type loginUserAccount = {
    email: string,
    password: string
}

const appwriteClient = new Client();
appwriteClient.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);

const account = new Account(appwriteClient);

export class AppwriteService{
    async createUserAccount({email, password, name}: CreateUserAccount){
        try {
            const userAccount=await account.create(ID.unique(), email, password, name);
            console.log(userAccount);
            if(userAccount){
                return this.login({email, password});   
            }else{
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }
    async login({email, password}: loginUserAccount){
        try {
            return await account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }
    async isLoggedIn(): Promise<boolean>{
        try {
            const data = await this.getCurrentUser();
            return Boolean(data);
        } catch (error) {}
        return false;
    }

    async getCurrentUser(){
        try {
            return account.get();
            
        } catch (error) {
            console.log("getCurrentUser error"+ error);
        }
        return null;
    }
    async logout(){
        try {
            return await account.deleteSession("current");
        } catch (error) {
            console.log("Logout error: "+ error);
        }
    }
    async loginThroughGoogle(){
        try {
            const res = await account.createOAuth2Session("google", "http://localhost:3000/profile", "http://localhost:3000/")
        } catch (error) {
            console.log("google error");
        }
    }
    async loginThroughGithub(){
        try {
            const res = await account.createOAuth2Session("github", "http://localhost:3000/profile", "http://localhost:3000/")
        } catch (error) {
            console.log("github error");
        }
    }
}
const appwriteService = new AppwriteService();
export default appwriteService;
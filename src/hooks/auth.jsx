import { useContext, createContext, useState, useEffect } from "react";
import { api } from "../sever";

const AuthContext = createContext({})

function AuthProvider({children}){
    const [data, setData] = useState({})

    async function signIn({email, password}){
        if(!email || !password){
            return alert("Prençha os campos do formulário!!")
        }

        try{
            const response = await api.post("/sessions", {email, password})
            
            const { user, token } = response.data;
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`

            localStorage.setItem("@rocketmovies:user", JSON.stringify(user));
            localStorage.setItem("@rocketmovies:token", token);

            setData({ user, token });

        } catch(error){
            if(error.response){
                alert(error.response.data.message)

            }else{
                alert("Não foi possivel entrar")
            };
        };
    };
    
    async function updateProfile({user, avatarFile}){
        try{
            if(avatarFile){
                const fileUploadForm = new FormData();
                fileUploadForm.append("avatar", avatarFile);

                const response = await api.patch("/users/avatar", fileUploadForm);
                user.avatar = response.data.avatar;

            };


            await api.put("/users", user)

            localStorage.setItem("@rocketmovies:user", JSON.stringify(user))
            setData({user, token: data.token});

            alert("Dados atualizados!!!");

        } catch(error){
            if(error.response){
                alert(error.response.data.message)

            }else{
                alert("Não foi possivel atualizar!!!")
            };

        };
    };

    function signOut(){
        localStorage.removeItem("@rocketmovies:user")
        localStorage.removeItem("@rocketmovies:token")

        setData({});
    };

    useEffect(() => {
        const user = localStorage.getItem("@rocketmovies:user")
        const token = localStorage.getItem("@rocketmovies:token")

        if(user && token){
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`

            setData({
                token,
                user: JSON.parse(user) 
            });
        };

    }, []);


    return(
        <AuthContext.Provider value={{
            signIn,
            signOut,
            updateProfile,
            user: data.user
        }}>
            {children}
        </AuthContext.Provider>
    );
};


function useAuth(){
    const context = useContext(AuthContext);

    return context;
};


export { AuthProvider, useAuth};
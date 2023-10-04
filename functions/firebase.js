

// =================================== IMPORTAR FIREBASE =============================================== //



  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";

  import { 
            getFirestore ,
            collection   , 
            addDoc       ,
            getDocs      ,
            query        , 
            where        ,
            limit 
    } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";



// =================================== VARIAVEIS =============================================== //

// dados do app
const firebaseConfig = {
    apiKey: "AIzaSyAb9pv_fUvoeYShp3vZbxbT1ur7C7fJUeU",
    authDomain: "ecommerce-ff132.firebaseapp.com",
    projectId: "ecommerce-ff132",
    storageBucket: "ecommerce-ff132.appspot.com",
    messagingSenderId: "991605978710",
    appId: "1:991605978710:web:5a9cd758caccd7426fedf7"
  };

// variavel app
const app = initializeApp(firebaseConfig);

// variavel banco
const db = getFirestore(app);

// colecao
export const colProdutos = collection(db, "produto")


  // =================================== FUNCOES =============================================== //



// funcao para criar um documento
// parametro >> colecao | objeto
// retorno >> documento criado
export async function  adicionarDocumento(col,objeto){

    try{

        const documento = await addDoc(col , objeto );
        //console.log("Documento criado com sucesso! ID:", documento.id);
        //console.log(documento)
        //return documento
    }

    catch (error) {

        console.error("Erro ao criar o documento:", error);

      }

    
}




//funcao para consultar base
//parametros >> query
//retorno >> documentos
export async function consultarBase(q){
    
    const querySnapshot = await getDocs(q);

    return querySnapshot;
  
}

// funcao para retornar total de produtos
// parametros >> colecao
// retorno >> total

export async function totalProdutos(){
    
    const querySnapshot = await getDocs(colProdutos);

    return querySnapshot.size;
  
}

//consultas
export const queryProduto01 = query(colProdutos,limit(8))



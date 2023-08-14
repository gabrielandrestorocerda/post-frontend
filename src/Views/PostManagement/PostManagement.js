// Hooks importados
import React from "react";
import { useState } from "react";
import useFormulario from "../../Hooks/useFormulario";

// Componentes
import Navbar from "../../Components/Navbar/Navbar";
import Layout from "../../Components/Layout/Layout";
import Title from "../../Components/Title/Title";
import Datatable from "../../Components/Datatable/Datatable";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import Textarea from "../../Components/Textarea/Textearea";

// CSS
import './PostManagement.css';


const PostManagement = () => {
    // Hooks
    const [posts, setPosts] = useState([])
    const [formulario, handleChange, reset] = useFormulario({ 
        post: '', 
        description: '',
    })
    
    // Crud
    const addPost = (e) => {
        e.preventDefault()
        setPosts([
          ...posts,
          formulario,
        ])
        reset();
    }
    
    const deletePost = (dataElement) => {
        const newPosts = posts.filter( postData => postData.post !== dataElement.post);
        setPosts(newPosts);
    }

    // Component
    return (
        <div>
            <Navbar/>
            <Title>Gestion de posts</Title>
            <Layout>
                <div className="columna">
                    <Title>Posts</Title>
                    <div className="options-buttons">
                        <Button klass='button' onClick={() =>{}}>Filtrar</Button>
                    </div>
                    <Datatable data={posts} deleteFunction={deletePost}/>
                </div>
                <div className="columna">
                    <Title>Crea un post</Title>
                    <Input
                        label="Post" 
                        name="post"
                        value={formulario.post} 
                        onChange={handleChange}
                        placeholder="Escribir aquí el título del post"
                    />
                    <Textarea
                        label="Descripción" 
                        name="description"
                        value={formulario.description} 
                        onChange={handleChange}
                        type="textarea"
                    />
                    <div className="add-post-button">
                        <Button klass='button' onClick={addPost}>Agregar</Button>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default PostManagement;
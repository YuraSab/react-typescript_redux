import React, {useEffect} from 'react';
import {useTypeSelector} from "../hooks/useTypeSelector";
import {useActions} from "../hooks/useActions";

const TodoList: React.FC = () => {

    const {page, error, loading, todos, limit} = useTypeSelector(state => state.todo);

    const {fetchTodos, setTodoPage} = useActions();

    const pages = [1, 2, 3, 4, 5];


    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])

    // if(loading) {
    //     return <h1>Loading...</h1>
    // }
    // if(error) {
    //     return <h1>Error!</h1>
    // }

    return (
        <div>
            {todos.map(value => <div key={value.id}>{value.id} - {value.title}</div>)}
            <div style={{display: "flex"}}>
                {
                    pages.map(p =>
                        <div
                            onClick={() => setTodoPage(p)}
                            style={{border: p === page ? `2px solid green` : `1px solid gray`, padding: 10}}
                            key = {p}
                        >
                            {p}
                        </div>)
                }
            </div>
        </div>
    );
};

export default TodoList;
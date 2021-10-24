let TodoItem = ({list}) =>  {
    return (
        <>
            <div >
                {list.map((item) => (
                    <p 
                    className="h3 text-capitalize mt-3 "
                        key={item.id}>
                        
                        {item.title}

                    </p>
                ))}

            </div>
        </>
    );
    
}
export default TodoItem;
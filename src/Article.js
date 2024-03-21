function Article(props){
    let newsItems=props.data.map(function(value,key){
        return (<><ul><li>{value}</li></ul></>)
    })
    return (<><p>{newsItems}</p></>)

}
export default Article;
function Footer(props){
    return(
        <div className="py-3 bg-dark text-light" bg="dark" variand="dark">
            <div className="container">
                <p className="text-center mb-0">Footer Component. - {props.title}</p>
            </div>
        </div>
    )
}
export default Footer;
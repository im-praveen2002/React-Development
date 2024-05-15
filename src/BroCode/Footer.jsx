function Footer(){

    var varYear = new Date().getFullYear();

    return(

        <footer>
            <p>&copy; {varYear} My Website</p>
        </footer>
    );
}

export default Footer
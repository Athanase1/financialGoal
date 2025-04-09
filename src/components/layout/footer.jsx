export default function Footer(){
    const currentYear = new Date().getFullYear()
    return(
       
        <footer>
            <h3>QC. QC. CA.</h3>
            <h3>&copy; ${currentYear} Gymmers Inc all rights reserved</h3>
            <div>
                <a href="#">Terms of use</a>
                <a href="#">Privacy policy</a>
            </div> 
        </footer>
    )
}
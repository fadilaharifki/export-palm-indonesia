import Corousel from "../../components/corousel"
import About from "../about"
import Feature from "../feature"
import Product from "../product"
import Teams from "../teams"

export default function Home() {
    return (
        <>
            <Corousel />
            <About />
            <Feature />
            <Product />
            <Teams />
        </>
    )
}
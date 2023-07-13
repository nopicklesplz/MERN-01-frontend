import { Link } from 'react-router-dom';

const Public = () => {
    const content = (
        <section className='public'>
            <header>
                <h1>Welcome to <span className='nowrap'>J's Repairs</span></h1>
            </header>
            <main className='public__main'>
                <p>Located in Beautiful Downtown Clovis City, J's Repairs provides a trained staff ready to meet your tech repair needs.</p>
                <address className='public__addr'>
                    J's Repairs<br />
                    559 Clovis Drive<br />
                    Clovis City, CA 12345<br />
                    <a href='tel:+15591234567'>(559) 123-4567</a>
                </address>
                <br />
                <p>Owner: Jesus Moreno</p>
            </main>
            <footer>
                <Link to='/login'>Employee Login</Link>
            </footer>
        </section>
    )
    return content;
}
export default Public;
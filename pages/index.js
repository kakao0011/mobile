import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <section>
        <h1>
          Admin
        </h1>
        <div>
          <Link href="/add">create link</Link>
        </div>          
        <div>
          <Link href="/id/sa8dasd72">masina</Link>
        </div>        
        <div>
          <Link href="/onlinekauf/1236nff34">onlinekauf</Link>
        </div>            
        <div>
          <Link href="/email">Email</Link>
        </div>       
    </section>
  )
}

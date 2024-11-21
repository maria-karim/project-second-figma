
import Link from "next/link";
import First from './components/First';
import Second from './components/Second';
import Third  from './components/Third';
import Fourth  from './components/Fourth';
import Form  from './components/Form';


export default function Home() {
  return ( <div>

       
       <First />
       <Second />
       <Third />
      <Fourth />
      <Form />
    
    <Link href="/"></Link>
    <Link href="/gallery"></Link>
    <Link href ="/projects"></Link>
    <Link href="/certificates"></Link>
    <Link href ="/contacts"></Link>
  </div>
  ) 
}
import Link from 'next/link';
import Layout from '../components/layout';
import css from '../styles/contactus.less';

const submitContact = () => {
    console.log('CONTACT SUBMIT');
}

const Contactus = () => (
  <Layout>
    <div>
        <button className={css.contactBtn} onClick={submitContact}>REGISTER</button>
    </div>
  </Layout>
);

export default Contactus;
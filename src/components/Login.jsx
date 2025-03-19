import styles from "../styles/Login.module.css"



function Login(){
  return( 
<>
<div className={styles.loginContainer}>
<span className={styles.leftContainer}>
  
<h2>Welcome to farmer Market</h2>
<p>Join the revolution in agriculture & connect with customers directly.</p>

</span>
<span className={styles.rightContainer}>
  <form>
    <h2>Login</h2>
    <input type="email"placeholder="Enter email Id"/>
    <a>NEW to WEBSITE ? Create a account</a>
    <button className={styles.sendButton}>submit</button>
  </form>
</span>
</div>

</>
  
);}
export default Login;
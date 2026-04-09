// IMPORTANDO O CSS MODULES
import styles from "@/components/Semaforo/Semaforo.modules.css"

const Semaforo = () => {
    return(
        <>
        {/* Container */}
        {/* CSS inline */}

         <div style={
            {
                height: "100vh",
                display: "flex",
                //flex-direction
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#f0f0f0",
                marginTop: "30px"
            }
         }>
            <h3 style={{marginTop: "30px"}}>Semáforo em React</h3>
            <br />

            {/* LUZES DO SEMAFORO */}
            <div className={styles.luz}></div>
            <div className={styles.luz}></div>
            <div className={styles.luz}></div>
         </div>
        </>
    )
}

export default Semaforo;
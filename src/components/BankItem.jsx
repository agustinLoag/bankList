import React from 'react'
import styles from './styles/bankItem.module.css'
const BankItem = ({bank}) => {
    console.log(bank,'x');
    return (
        <div className={`${styles.cardContent} card mt-4`} >
        <div className="d-flex justify-content-center mt-2">
        <img src={bank.url} className={styles.image} alt="..." />
        </div>
        <div className="card-body">
            
        <h5 className="card-title">{bank.bankName}</h5>
        <p className="card-text">{bank.description}</p>
          <a href="#" className="btn btn-primary">Ir</a>
        </div>
      </div>
    )
}

export default BankItem



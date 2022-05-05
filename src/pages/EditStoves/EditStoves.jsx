import styles from './EditStoves.module.css';
import { useState } from "react";
import { GoFlame } from "react-icons/go";
import * as inventoryService from "../../services/inventoryService";
import { useNavigate } from "react-router-dom";


const EditStoves = () => {
    const [stoveStock, setStoveStock] = useState({})
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: 'stove',
        stoveNum: '',
        stoveToOrder: '',
    })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      await inventoryService.addInventory(formData).then((formData) => {
        setStoveStock(formData);
        navigate("/inventory");
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };


  return (
    <div>
      <h1 className={styles.h1}>Edit Stoves Inventory</h1>

      <form autoComplete="off" onSubmit={handleSubmit}>
        <div>
            <form autoComplete='off' onSubmit={handleSubmit}>
                <div className={styles.formdiv}>
                <p className={styles.titleline}>Stoves <GoFlame className={styles.fireicon}/></p>
                    <p className={styles.inputline}>Quantity In-Stock 
                        <input 
                            type="number"
                            className={styles.numberInput}
                            value={stoveNum}
                            name="stoveNum"
                            onChange={handleChange}
                            autoComplete="off"
                        />
                    </p>
                    <p className={styles.inputline}>Quantity to Order 
                        <input 
                            type="number"
                            className={styles.numberInput}
                            value={stoveToOrder}
                            name="stoveToOrder"
                            onChange={handleChange}
                            autoComplete='off'
                        />
                    </p>
                    <hr className={styles.hr}  />
                </div>
                <button type="submit" onClick={handleSubmit}>Save</button>
                <button type="reset" onClick={() => navigate('/inventory')}>Cancel</button>
            </form>
        </div>

        <div className={styles.btnblock}>
          <button type="submit" onClick={handleSubmit} className={styles.btnprim}>
            Save
          </button>
          <button className={styles.btnsec} type="reset" onClick={() => navigate("/inventory")}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditStoves;

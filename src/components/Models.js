import { motion } from 'framer-motion'

const Models = () => {
    return (
        <motion.div className="models"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <h1>Models</h1>
        </motion.div>
    );
}

export default Models;
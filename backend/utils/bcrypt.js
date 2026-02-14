import bcrypt from 'bcrypt';


const hashedPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
}

const comparePassword = async(password,hashedPassword) =>{
    return await bcrypt.compare(password,hashedPassword);
}

export {hashedPassword,comparePassword};
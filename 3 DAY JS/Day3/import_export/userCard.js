const renderUserCard=(user)=>{
    const { name, role = "Student", avatar = DEFAULT_AVATAR }=user;
    console.log(`[User Card] Name: ${name} | Role: ${role} | Avatar: ${avatar}`);
}
export default renderUserCard;
export const DEFAULT_AVATAR = "https://via.placeholder.com/150";
import axios from 'axios';

// Fonksiyonun asenkron olarak tanımlanması ve default olarak dışa aktarılması
async function fetchUserData(userId) {
  // Kullanıcı bilgilerini çekme
  const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const userData = userResponse.data;

  // Kullanıcının gönderilerini çekme
  const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  const userPosts = postsResponse.data;

  // Kullanıcı bilgileri ile gönderilerin birleştirilmesi
  const result = {
    ...userData,
    posts: userPosts
  };

  // Sonucun dönülmesi
  return result;
}

export default fetchUserData;
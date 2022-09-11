import '../homePanel/stylesHomePanel.css';
import ImgPosts from './img/posts.svg';

export function HomeImagePosts() {
  return <div style={{ backgroundImage: `url(${ImgPosts})` }}>Posts</div>;
}

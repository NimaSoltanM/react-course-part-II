import { useState } from 'react';
import List from './components/List';
import Form from './components/Form';

function App() {
  const [posts, setPosts] = useState([
    {
      id: 5,
      text: 'ری‌اکت نسبت به انگولار سریعتر است و اکوسیستم بزرگتری دارد. همچنین ری‌اکت یک کتابخانه است در حالی که انگولار یک فریمورک کامل است.',
      likes: 5,
      dislikes: 2,
      spoiler: false,
      categories: ['برنامه‌نویسی', 'فناوری'],
    },
    {
      id: 6,
      text: 'آیفون ۱۴ پرو مکس دارای پردازنده A16 Bionic است که سریع‌ترین پردازنده برای یک گوشی هوشمند است. دوربین آن نیز با ۴۸ مگاپیکسل بسیار پیشرفته است.',
      likes: 12,
      dislikes: 3,
      spoiler: false,
      categories: ['تکنولوژی', 'عمومی'],
    },
    {
      id: 7,
      text: 'وقتی معلوم شد قاتل در فیلم برادر کارآگاه است تعجب کردم! پیش بینی این پایان رو نکرده بودم.',
      likes: 7,
      dislikes: 1,
      spoiler: true,
      categories: ['سینما', 'سرگرمی'],
    },
    {
      id: 8,
      text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
      likes: 10,
      dislikes: 15,
      spoiler: false,
      categories: ['عمومی'],
    },
  ]);

  const postReducer = (id, action) => {
    switch (action.type) {
      case 'REMOVE':
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
        break;
      case 'LIKE':
        setPosts((prevPosts) =>
          prevPosts.map((post) => {
            return post.id === id ? { ...post, likes: post.likes + 1 } : post;
          })
        );
        break;
      case 'DISLIKE':
        setPosts((prevPosts) =>
          prevPosts.map((post) => {
            return post.id === id
              ? { ...post, dislikes: post.dislikes + 1 }
              : post;
          })
        );
        break;
      case 'EDIT':
        setPosts((prevPosts) =>
          prevPosts.map((post) => {
            return post.id === id ? { ...post, text: action.payload } : post;
          })
        );
        break;
      default:
        break;
    }
  };

  const showPostHandler = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        return post.id === id ? { ...post, spoiler: !post.spoiler } : post;
      })
    );
  };

  const addPostHandler = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  return (
    <div className='main'>
      <Form onSubmit={addPostHandler} />
      <List
        posts={posts}
        onDislike={postReducer}
        onLike={postReducer}
        onRemove={postReducer}
        onEdit={postReducer}
        onShowPost={showPostHandler}
      />
    </div>
  );
}

export default App;

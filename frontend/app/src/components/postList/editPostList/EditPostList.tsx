import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { AppDispatch } from '../../../app/store';
import { getImage, selectImage } from '../../../features/post/postSlice';

interface POST_ID {
  postId: string;
}
const EditPostList: React.FC<POST_ID> = ({ postId }) => {
  const dispatch: AppDispatch = useDispatch();
  const image = useSelector(selectImage);
  const history = useHistory();

  const img = image.filter((img) => {
    return img.postId === postId;
  });

  useEffect(() => {
    const fetchBootLoader = async () => {
      await dispatch(getImage());
    };
    fetchBootLoader();
  }, [dispatch]);

  return (
    <img
      src={img[0]?.img}
      alt="投稿画像"
      onClick={() => history.push(`/post/edit/${postId}`)}
    />
  );
};

export default EditPostList;

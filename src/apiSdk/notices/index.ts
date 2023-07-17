import axios from 'axios';
import queryString from 'query-string';
import { NoticeInterface, NoticeGetQueryInterface } from 'interfaces/notice';
import { GetQueryInterface } from '../../interfaces';

export const getNotices = async (query?: NoticeGetQueryInterface) => {
  const response = await axios.get(`/api/notices${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createNotice = async (notice: NoticeInterface) => {
  const response = await axios.post('/api/notices', notice);
  return response.data;
};

export const updateNoticeById = async (id: string, notice: NoticeInterface) => {
  const response = await axios.put(`/api/notices/${id}`, notice);
  return response.data;
};

export const getNoticeById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/notices/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteNoticeById = async (id: string) => {
  const response = await axios.delete(`/api/notices/${id}`);
  return response.data;
};

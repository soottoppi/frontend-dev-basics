package com.douzone.ch08.controller.repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.douzone.ch08.controller.exception.GuestbookRepositoryException;
import com.douzone.ch08.controller.vo.GuestbookVo;

@Repository
public class GuestbookRepository {
	@Autowired
	private SqlSession sqlSession;
	
	public boolean insert(GuestbookVo vo) {
		int count = sqlSession.insert("guestbook.insert", vo);
		System.out.println(vo);
		return count == 1;
	}
	
	public List<GuestbookVo> findAll() throws GuestbookRepositoryException {
		return sqlSession.selectList("guestbook.findAll");
	}
	
	public List<GuestbookVo> findWithNo(Long no) throws GuestbookRepositoryException {
		return sqlSession.selectList("guestbook.findWithNo", no);
	}

	public boolean delete(GuestbookVo vo) {
		int count = sqlSession.delete("guestbook.delete", vo);
		return count == 1;
	}
	
}

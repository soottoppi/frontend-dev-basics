package com.douzone.ch08.controller.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.douzone.ch08.controller.repository.GuestbookRepository;
import com.douzone.ch08.controller.vo.GuestbookVo;

@Service
public class GuestbookService {
	@Autowired
	private GuestbookRepository guestbookRepository;

	public List<GuestbookVo> list() {
		return guestbookRepository.findAll();
	}

	public List<GuestbookVo> list(Long no) {
		return guestbookRepository.findWithNo(no);
	}

	public void delete(GuestbookVo vo) {
		guestbookRepository.delete(vo);
	}

	public void add(GuestbookVo vo) {
		guestbookRepository.insert(vo);
	}

}

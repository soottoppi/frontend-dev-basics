package com.douzone.ch08.controller.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.douzone.ch08.controller.dto.JsonResult;
import com.douzone.ch08.controller.service.GuestbookService;
import com.douzone.ch08.controller.vo.GuestbookVo;

@Controller
@RequestMapping("/api/guestbook")
public class GuestbookController {

	@Autowired
	GuestbookService guestbookService;
	
	@ResponseBody
	@RequestMapping("/add")
	public JsonResult ex1(@RequestBody GuestbookVo vo) {
		guestbookService.add(vo);
		return JsonResult.success(vo);
	}
	
	@ResponseBody
	@RequestMapping("/list")
	public JsonResult ex2(
		@RequestParam(value="sn", required=true, defaultValue="-1") Long no) {
		// list = guestbookService.findAll(no)를 사용해서 리스트 가져오기
		List<GuestbookVo> list;
		if(no != -1) {
			list = guestbookService.list();	
		} else {
			list = guestbookService.list(no);
		}
		
		return JsonResult.success(list);
	}
	
	
	@ResponseBody
	@RequestMapping("/delete/{no}")
	public JsonResult ex3(@PathVariable("no") Long no, String password) {
		// result = guestbookService.deleteMessage(no, password)를 사용해서 삭제작업
		
		Long data = 0L;
		
		//1. 삭제가 안된 경우
		data = -1L;
		
		//2. 삭제가 된 경우
		data = no;
		
		return JsonResult.success(data);
	}
	
}
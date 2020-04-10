package com.momato.tomato;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.momato.common.dto.ResponseResult;
import com.momato.tomato.dto.Tomato;

@RestController
@RequestMapping("/")
public class TomatoController {
	
	@Autowired
	TomatoService service;
	
	@GetMapping("tomatos/{tomatoDate}/{tomatoIdx}")
	public ResponseResult retrieveTomato(@PathVariable @DateTimeFormat(pattern="yyyy-MM-dd") Date tomatoDate, @PathVariable int tomatoIdx) {
		Tomato tomato = new Tomato();
		tomato.setTomatoDate(tomatoDate);
		tomato.setTomatoIdx(tomatoIdx);
		System.out.println(0/0);
		return new ResponseResult(HttpStatus.OK,service.retrieveTomato(tomato));
		
	}
	
	@PostMapping("tomatos")
	public void addTomato(@RequestBody Tomato tomato) {
		service.addTomato(tomato);
	}
	
	@DeleteMapping("tomatos/{tomatoIdx}")
	public void removeTomato(@PathVariable int tomatoIdx) {
		service.removeTomato(tomatoIdx);
	}
	
	@PutMapping("tomatos")
	public void editTomato(@RequestBody Tomato tomato) {
		service.editTomato(tomato);
	}
}

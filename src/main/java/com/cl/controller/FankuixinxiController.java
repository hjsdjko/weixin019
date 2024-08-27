package com.cl.controller;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Map;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Date;
import java.util.List;
import javax.servlet.http.HttpServletRequest;

import com.cl.utils.ValidatorUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.cl.annotation.IgnoreAuth;

import com.cl.entity.FankuixinxiEntity;
import com.cl.entity.view.FankuixinxiView;

import com.cl.service.FankuixinxiService;
import com.cl.service.TokenService;
import com.cl.utils.PageUtils;
import com.cl.utils.R;
import com.cl.utils.MPUtil;
import com.cl.utils.CommonUtil;
import java.io.IOException;

/**
 * 反馈信息
 * 后端接口
 * @author 
 * @email 
 * @date 2024-04-12 13:01:16
 */
@RestController
@RequestMapping("/fankuixinxi")
public class FankuixinxiController {
    @Autowired
    private FankuixinxiService fankuixinxiService;



    


    /**
     * 后端列表
     */
    @RequestMapping("/page")
    public R page(@RequestParam Map<String, Object> params,FankuixinxiEntity fankuixinxi,
		HttpServletRequest request){
		String tableName = request.getSession().getAttribute("tableName").toString();
		if(tableName.equals("maijia")) {
			fankuixinxi.setMaijiazhanghao((String)request.getSession().getAttribute("username"));
		}
		if(tableName.equals("yonghu")) {
			fankuixinxi.setYonghuzhanghao((String)request.getSession().getAttribute("username"));
		}
        EntityWrapper<FankuixinxiEntity> ew = new EntityWrapper<FankuixinxiEntity>();

		PageUtils page = fankuixinxiService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, fankuixinxi), params), params));

        return R.ok().put("data", page);
    }
    
    /**
     * 前端列表
     */
	@IgnoreAuth
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params,FankuixinxiEntity fankuixinxi, 
		HttpServletRequest request){
        EntityWrapper<FankuixinxiEntity> ew = new EntityWrapper<FankuixinxiEntity>();

		PageUtils page = fankuixinxiService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, fankuixinxi), params), params));
        return R.ok().put("data", page);
    }

	/**
     * 列表
     */
    @RequestMapping("/lists")
    public R list( FankuixinxiEntity fankuixinxi){
       	EntityWrapper<FankuixinxiEntity> ew = new EntityWrapper<FankuixinxiEntity>();
      	ew.allEq(MPUtil.allEQMapPre( fankuixinxi, "fankuixinxi")); 
        return R.ok().put("data", fankuixinxiService.selectListView(ew));
    }

	 /**
     * 查询
     */
    @RequestMapping("/query")
    public R query(FankuixinxiEntity fankuixinxi){
        EntityWrapper< FankuixinxiEntity> ew = new EntityWrapper< FankuixinxiEntity>();
 		ew.allEq(MPUtil.allEQMapPre( fankuixinxi, "fankuixinxi")); 
		FankuixinxiView fankuixinxiView =  fankuixinxiService.selectView(ew);
		return R.ok("查询反馈信息成功").put("data", fankuixinxiView);
    }
	
    /**
     * 后端详情
     */
    @RequestMapping("/info/{id}")
    public R info(@PathVariable("id") Long id){
        FankuixinxiEntity fankuixinxi = fankuixinxiService.selectById(id);
		fankuixinxi = fankuixinxiService.selectView(new EntityWrapper<FankuixinxiEntity>().eq("id", id));
        return R.ok().put("data", fankuixinxi);
    }

    /**
     * 前端详情
     */
	@IgnoreAuth
    @RequestMapping("/detail/{id}")
    public R detail(@PathVariable("id") Long id){
        FankuixinxiEntity fankuixinxi = fankuixinxiService.selectById(id);
		fankuixinxi = fankuixinxiService.selectView(new EntityWrapper<FankuixinxiEntity>().eq("id", id));
        return R.ok().put("data", fankuixinxi);
    }
    



    /**
     * 后端保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody FankuixinxiEntity fankuixinxi, HttpServletRequest request){
    	fankuixinxi.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(fankuixinxi);
        fankuixinxiService.insert(fankuixinxi);
        return R.ok();
    }
    
    /**
     * 前端保存
     */
    @RequestMapping("/add")
    public R add(@RequestBody FankuixinxiEntity fankuixinxi, HttpServletRequest request){
    	fankuixinxi.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(fankuixinxi);
        fankuixinxiService.insert(fankuixinxi);
        return R.ok();
    }



    /**
     * 修改
     */
    @RequestMapping("/update")
    @Transactional
    public R update(@RequestBody FankuixinxiEntity fankuixinxi, HttpServletRequest request){
        //ValidatorUtils.validateEntity(fankuixinxi);
        fankuixinxiService.updateById(fankuixinxi);//全部更新
        return R.ok();
    }



    

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Long[] ids){
        fankuixinxiService.deleteBatchIds(Arrays.asList(ids));
        return R.ok();
    }
    
	








}

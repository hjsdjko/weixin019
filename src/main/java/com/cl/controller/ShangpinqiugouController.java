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

import com.cl.entity.ShangpinqiugouEntity;
import com.cl.entity.view.ShangpinqiugouView;

import com.cl.service.ShangpinqiugouService;
import com.cl.service.TokenService;
import com.cl.utils.PageUtils;
import com.cl.utils.R;
import com.cl.utils.MPUtil;
import com.cl.utils.CommonUtil;
import java.io.IOException;

/**
 * 商品求购
 * 后端接口
 * @author 
 * @email 
 * @date 2024-04-12 13:01:17
 */
@RestController
@RequestMapping("/shangpinqiugou")
public class ShangpinqiugouController {
    @Autowired
    private ShangpinqiugouService shangpinqiugouService;



    


    /**
     * 后端列表
     */
    @RequestMapping("/page")
    public R page(@RequestParam Map<String, Object> params,ShangpinqiugouEntity shangpinqiugou,
		HttpServletRequest request){
    	if(!request.getSession().getAttribute("role").toString().equals("管理员")) {
    		shangpinqiugou.setUserid((Long)request.getSession().getAttribute("userId"));
    	}
		String tableName = request.getSession().getAttribute("tableName").toString();
		if(tableName.equals("yonghu")) {
			shangpinqiugou.setQiugouzhanghao((String)request.getSession().getAttribute("username"));
		}
        EntityWrapper<ShangpinqiugouEntity> ew = new EntityWrapper<ShangpinqiugouEntity>();

		PageUtils page = shangpinqiugouService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, shangpinqiugou), params), params));

        return R.ok().put("data", page);
    }
    
    /**
     * 前端列表
     */
	@IgnoreAuth
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params,ShangpinqiugouEntity shangpinqiugou, 
		HttpServletRequest request){
        EntityWrapper<ShangpinqiugouEntity> ew = new EntityWrapper<ShangpinqiugouEntity>();

		PageUtils page = shangpinqiugouService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, shangpinqiugou), params), params));
        return R.ok().put("data", page);
    }

	/**
     * 列表
     */
    @RequestMapping("/lists")
    public R list( ShangpinqiugouEntity shangpinqiugou){
       	EntityWrapper<ShangpinqiugouEntity> ew = new EntityWrapper<ShangpinqiugouEntity>();
      	ew.allEq(MPUtil.allEQMapPre( shangpinqiugou, "shangpinqiugou")); 
        return R.ok().put("data", shangpinqiugouService.selectListView(ew));
    }

	 /**
     * 查询
     */
    @RequestMapping("/query")
    public R query(ShangpinqiugouEntity shangpinqiugou){
        EntityWrapper< ShangpinqiugouEntity> ew = new EntityWrapper< ShangpinqiugouEntity>();
 		ew.allEq(MPUtil.allEQMapPre( shangpinqiugou, "shangpinqiugou")); 
		ShangpinqiugouView shangpinqiugouView =  shangpinqiugouService.selectView(ew);
		return R.ok("查询商品求购成功").put("data", shangpinqiugouView);
    }
	
    /**
     * 后端详情
     */
    @RequestMapping("/info/{id}")
    public R info(@PathVariable("id") Long id){
        ShangpinqiugouEntity shangpinqiugou = shangpinqiugouService.selectById(id);
		shangpinqiugou = shangpinqiugouService.selectView(new EntityWrapper<ShangpinqiugouEntity>().eq("id", id));
        return R.ok().put("data", shangpinqiugou);
    }

    /**
     * 前端详情
     */
	@IgnoreAuth
    @RequestMapping("/detail/{id}")
    public R detail(@PathVariable("id") Long id){
        ShangpinqiugouEntity shangpinqiugou = shangpinqiugouService.selectById(id);
		shangpinqiugou = shangpinqiugouService.selectView(new EntityWrapper<ShangpinqiugouEntity>().eq("id", id));
        return R.ok().put("data", shangpinqiugou);
    }
    



    /**
     * 后端保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody ShangpinqiugouEntity shangpinqiugou, HttpServletRequest request){
    	shangpinqiugou.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(shangpinqiugou);
    	shangpinqiugou.setUserid((Long)request.getSession().getAttribute("userId"));
        shangpinqiugouService.insert(shangpinqiugou);
        return R.ok();
    }
    
    /**
     * 前端保存
     */
    @RequestMapping("/add")
    public R add(@RequestBody ShangpinqiugouEntity shangpinqiugou, HttpServletRequest request){
    	shangpinqiugou.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(shangpinqiugou);
        shangpinqiugouService.insert(shangpinqiugou);
        return R.ok();
    }



    /**
     * 修改
     */
    @RequestMapping("/update")
    @Transactional
    public R update(@RequestBody ShangpinqiugouEntity shangpinqiugou, HttpServletRequest request){
        //ValidatorUtils.validateEntity(shangpinqiugou);
        shangpinqiugouService.updateById(shangpinqiugou);//全部更新
        return R.ok();
    }



    

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Long[] ids){
        shangpinqiugouService.deleteBatchIds(Arrays.asList(ids));
        return R.ok();
    }
    
	








}

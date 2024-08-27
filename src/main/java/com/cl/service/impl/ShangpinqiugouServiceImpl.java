package com.cl.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.List;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.cl.utils.PageUtils;
import com.cl.utils.Query;


import com.cl.dao.ShangpinqiugouDao;
import com.cl.entity.ShangpinqiugouEntity;
import com.cl.service.ShangpinqiugouService;
import com.cl.entity.view.ShangpinqiugouView;

@Service("shangpinqiugouService")
public class ShangpinqiugouServiceImpl extends ServiceImpl<ShangpinqiugouDao, ShangpinqiugouEntity> implements ShangpinqiugouService {
	
	
    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<ShangpinqiugouEntity> page = this.selectPage(
                new Query<ShangpinqiugouEntity>(params).getPage(),
                new EntityWrapper<ShangpinqiugouEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<ShangpinqiugouEntity> wrapper) {
		  Page<ShangpinqiugouView> page =new Query<ShangpinqiugouView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
	@Override
	public List<ShangpinqiugouView> selectListView(Wrapper<ShangpinqiugouEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public ShangpinqiugouView selectView(Wrapper<ShangpinqiugouEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}


}

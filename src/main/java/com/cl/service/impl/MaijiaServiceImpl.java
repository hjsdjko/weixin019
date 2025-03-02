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


import com.cl.dao.MaijiaDao;
import com.cl.entity.MaijiaEntity;
import com.cl.service.MaijiaService;
import com.cl.entity.view.MaijiaView;

@Service("maijiaService")
public class MaijiaServiceImpl extends ServiceImpl<MaijiaDao, MaijiaEntity> implements MaijiaService {
	
	
    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<MaijiaEntity> page = this.selectPage(
                new Query<MaijiaEntity>(params).getPage(),
                new EntityWrapper<MaijiaEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<MaijiaEntity> wrapper) {
		  Page<MaijiaView> page =new Query<MaijiaView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
	@Override
	public List<MaijiaView> selectListView(Wrapper<MaijiaEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public MaijiaView selectView(Wrapper<MaijiaEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}


}

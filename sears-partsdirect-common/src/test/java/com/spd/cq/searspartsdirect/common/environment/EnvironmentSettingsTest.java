package com.spd.cq.searspartsdirect.common.environment;


import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.instanceOf;
import static org.hamcrest.Matchers.is;
import junit.framework.TestCase;

import org.junit.Before;
import org.junit.Test;

import com.spd.cq.searspartsdirect.common.fixture.EnvironmentSettingsFixture;


public class EnvironmentSettingsTest extends TestCase {

	private EnvironmentSettingsFixture fixture;

	@Before
	protected void setUp() throws Exception {
		super.setUp();
		fixture = new EnvironmentSettingsFixture();
	}
	
	@Test
	public void testAllMethods() throws Exception {
		EnvironmentSettings hook = new EnvironmentSettings();
		assertThat(EnvironmentSettings.get404HandlerURL(),is(instanceOf(String.class)));
		assertThat(EnvironmentSettings.getSitemapStartPaths(),is(instanceOf(String.class)));
		assertThat(EnvironmentSettings.getSitemapStopPaths(),is(instanceOf(String.class)));
		assertThat(EnvironmentSettings.getExternalAddedPrefix(),is(instanceOf(String.class)));
		assertThat(EnvironmentSettings.getExternalAddedSuffix(),is(instanceOf(String.class)));
		assertThat(EnvironmentSettings.getPDUserDataApiUrl(), is(instanceOf(String.class)));
		assertThat(EnvironmentSettings.getPDTopPartsApiUrl(), is(instanceOf(String.class)));
		assertThat(EnvironmentSettings.getPDModelSubApiUrl(), is(instanceOf(String.class)));
		assertThat(EnvironmentSettings.getPDJobCodePartsApiUrl(), is(instanceOf(String.class)));
		assertThat(EnvironmentSettings.getPDApiRoot(), is(instanceOf(String.class)));
		assertThat(EnvironmentSettings.getLocalHttpAndPort(), is(instanceOf(String.class)));
		assertThat(EnvironmentSettings.getLocalHttpsAndPort(), is(instanceOf(String.class)));
		assertThat(EnvironmentSettings.getCommercialSiteUrl(), is(instanceOf(String.class)));
		assertThat(EnvironmentSettings.getPD247ChatFlag(), is(instanceOf(String.class)));
		fixture.setUpStubSettings(hook);
		assertThat(EnvironmentSettings.get404HandlerURL(),is(EnvironmentSettings.HANDLE_404_URL));
		assertThat(EnvironmentSettings.getSitemapStartPaths(),is(EnvironmentSettings.SITEMAP_START_PATHS));
		assertThat(EnvironmentSettings.getSitemapStopPaths(),is(EnvironmentSettings.SITEMAP_STOP_PATHS));
		assertThat(EnvironmentSettings.getExternalAddedPrefix(),is(EnvironmentSettings.EXTERNAL_ADDED_PREFIX));
		assertThat(EnvironmentSettings.getExternalAddedSuffix(),is(EnvironmentSettings.EXTERNAL_ADDED_SUFFIX));
		assertThat(EnvironmentSettings.getPDUserDataApiUrl(), is (EnvironmentSettings.PD_USERDATA_API));
		assertThat(EnvironmentSettings.getPDUrl(), is (EnvironmentSettings.PD_URL));
		assertThat(EnvironmentSettings.getPDTopPartsApiUrl(), is (EnvironmentSettings.PD_TOPPARTS_API));
		assertThat(EnvironmentSettings.getPDModelSubApiUrl(), is(EnvironmentSettings.PD_MODELSUB_API));
		assertThat(EnvironmentSettings.getPDJobCodePartsApiUrl(), is(EnvironmentSettings.PD_JOBCODE_PARTS_API));
		assertThat(EnvironmentSettings.getPDApiRoot(), is(EnvironmentSettings.PD_API_ROOT));
		assertThat(EnvironmentSettings.getLocalHttpAndPort(), is(EnvironmentSettings.LOCAL_HTTP_N_PORT));
		assertThat(EnvironmentSettings.getLocalHttpsAndPort(), is(EnvironmentSettings.LOCAL_HTTPS_N_PORT));
		assertThat(EnvironmentSettings.getCommercialSiteUrl(), is(EnvironmentSettings.PD_COMMERCIAL_URL));
		assertThat(EnvironmentSettings.getPD247ChatFlag(), is(EnvironmentSettings.PD_247CHAT_FLAG));
		try {
			hook.deactivate(fixture.getComponentContext());
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
}

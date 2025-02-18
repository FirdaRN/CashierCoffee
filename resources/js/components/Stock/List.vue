
<template>
<main id="main" class="main">
<div class="pagetitle">
  <h1>Daftar Stok Barang</h1>
</div><!-- End Page Title -->

<section class="section">
  <div class="row">
    <div class="col-lg-12">
      <div class="card">
        <div class="card-body">
          <vuetable :api-url="target"
                    :fields="fields"
                    data-path="products"
                    detail-row-id="staff_id"
                    track-by="staff_id"
                    pagination-path="data"
                    :load-on-start="startOnLoad"
                    :append-params="params"
                    :css="css_vuetable"
                    @vuetable:pagination-data="onPaginationData"
                    ref="vuetable">
          </vuetable>
          <div class="vuetable-pagination">
              <vuetable-pagination-info ref="paginationInfo"
                  info-class="pagination-info"></vuetable-pagination-info>
              <vuetable-pagination ref="pagination" :css="css_pagination"
                  @vuetable-pagination:change-page="onChangePage"></vuetable-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</main><!-- End #main -->

</template>
<script>
import styles from '../../config/styles'
import StockCustomAction from './StockCustomAction.vue';

export default {
  mixins: [styles],
  name: 'category-list',
  data() {
    return {
      startOnLoad: true,
      target: '',
      fields: [
          {
              name: 'name',
              title: 'Nama Barang',
              sortField: 'name'
          },
          {
              name: 'category_name',
              title: 'Kategori',
              sortField: 'category_name'
          },
          {
              name: 'qty',
              title: 'Qty',
              sortField: 'qty'
          },
          {
              name: 'price',
              title: 'Harga',
              sortField: 'price'
          },
          {
              name: 'created_at',
              title: 'Tanggal Input',
              sortField: 'created_at'
          },
          {
              name: StockCustomAction,
              title: ''
          }, 
      ],
      params: {},
      perPage: 10,
    }
  },
  components: {
    'vuetable': require('vue3-vuetable/src/components/Vuetable.vue').default,
    'vuetable-pagination-info': require('vue3-vuetable/src/components/VuetablePaginationInfo.vue').default,
    'vuetable-pagination': require('vue3-vuetable/src/components/VuetablePagination.vue').default,
    'vuetable-pagination-dropdown': require('vue3-vuetable/src/components/VuetablePaginationDropdown.vue').default,
  }
};
</script>
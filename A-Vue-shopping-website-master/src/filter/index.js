export default function(Vue) {
    Vue.filter('date', tplDate => {
        let date = new Date(tplDate);
        return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
    });
};